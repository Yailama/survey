from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.forms import ModelForm
from django.core.paginator import Paginator
import datetime

import pyreadstat
from django import forms, template


class UploadFileForm(forms.Form):
    file = forms.FileField()

def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            path = request.FILES['file'].name
            df, var_labels, val_labels = read_file(path)
            return render(request, "survey/run.html", {"df": df,
                                                       "var_labels": var_labels,
                                                       "val_labels": val_labels})
    else:
        form = UploadFileForm()
    return render(request, 'survey/uploader.html', {'form': form})

def read_file(path):
    df, meta = pyreadstat.read_sav(path)
    var_labels, val_labels = meta.column_names_to_labels, meta.variable_value_labels
    return df, var_labels, val_labels


def solutions_pagination(request, solutions):
    # Add all necessary info to render post
    for solution in solutions:
        solution.author_name = solution.author.username

    # Pagination
    paginator = Paginator(solutions, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return page_obj

def run(request):
    return render(request, "survey/run.html")

def uploader(request):
    return render(request, "survey/uploader.html")