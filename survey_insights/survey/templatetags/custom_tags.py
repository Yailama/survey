from django import template
import datetime

register = template.Library()
@register.simple_tag
def get_val(di, key):
    return di[key]

@register.simple_tag
def current_time(format_string):
    return datetime.datetime.now().strftime(format_string)
