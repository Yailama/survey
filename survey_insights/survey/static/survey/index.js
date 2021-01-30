function add_options(elem, options){
  for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    elem.appendChild(el);
  }
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function add_audience(){
  const qgr = document.getElementById('AGroups');
  const container = document.createElement("div")
  const remove_audience = document.createElement("input");
  const audience_name = document.createElement("input");
  const var_name = document.createElement("input");
  const var_value = document.createElement("input");
  const operator = document.createElement("select");
  const add_param = document.createElement("input")

  setAttributes(container, {"class": "audience_block"})

  setAttributes(remove_audience, {"type": "button",
                                "value": "remove audience",
                                "class": "btn btn-danger",
                                "onclick": "remove_parent_block(this, '.audience_block')"});

  setAttributes(audience_name, {"type": "text",
                                "placeholder": "audience name",
                                "class": "au_name block_var_value btn btn-outline-primary",
                                "size": 10});

  setAttributes(var_name, {"type": "text",
                           "placeholder": "variable name",
                          "class": "var_name btn btn-outline-primary var_name",
                          "size": 5});

  setAttributes(var_value, {"type": "text",
                            "placeholder": "variable value",
                           "class": "var_value btn btn-outline-primary var_value",
                           "size": 5});

  setAttributes(operator, {"class": "var_operator btn-primary btn-group operator"})
  add_options(operator, [">", "<", "==", "!="]);

  setAttributes(add_param, {"type": "button",
                             "value": "add params",
                             "class": "btn btn-primary",
                             "onclick": "add_audience_params(this)"});

  container.append(remove_audience);
  container.append(audience_name);
  container.append(var_name);
  container.append(operator);
  container.append(var_value);
  container.append(add_param)
  qgr.append(container);

}

function add_audience_params(elem){
  const audience = elem.closest(".audience_block");
  const container = document.createElement("div")
  const remove_param = document.createElement("input");
  const param_operator = document.createElement("select");
  const var_name = document.createElement("input");
  const var_value = document.createElement("input");
  const operator = document.createElement("select");
  const add_param = document.createElement("input")

  setAttributes(container, {"class": "audience_param"})

  setAttributes(remove_param, {"type": "button",
                                "value": "remove param",
                                "class": "btn btn-danger",
                                "onclick": "remove_parent_block(this, '.audience_param')"});

  setAttributes(param_operator, {"class": "block_operator btn-primary btn-group"})
  add_options(param_operator, ["AND", "OR"]);

 setAttributes(var_name, {"type": "text",
                          "placeholder": "variable name",
                          "class": "var_name btn btn-outline-primary",
                          "size": 5});

  setAttributes(var_value, {"type": "text",
                            "placeholder": "variable value",
                           "class": "var_value btn btn-outline-primary",
                           "size": 5});

  setAttributes(operator, {"class": "var_operator btn-primary btn-group"})
  add_options(operator, [">", "<", "==", "!="]);

  setAttributes(add_param, {"type": "button",
                             "value": "add params",
                             "class": "btn btn-primary",
                             "onclick": "add_audience_params(this)"});

  container.append(remove_param);
  container.append(param_operator);
  container.append(var_name);
  container.append(operator);
  container.append(var_value);
  container.append(add_param);
  audience.append(container);

}

function add_group(){
  const gr = document.getElementById("QGroups");
  const container = document.createElement("div");
  const remove_group = document.createElement("input");
  const add_block = document.createElement("input");
  const var_type = document.createElement("select");
  const group_name = document.createElement("input");
  const contain = document.createElement("select");
  const value = document.createElement("input");
  const add_field = document.createElement("input");

  setAttributes(container, {"class": "group_block"});

  setAttributes(var_type, {"class": "questiontype btn-primary btn-group"})
  add_options(var_type, ["Binary", "Ordinal", "Multiple choice"]);

  setAttributes(contain, {"class": "questiontype btn-primary btn-group"})
  add_options(contain, ["contain", "not contain"]);

  setAttributes(remove_group, {"type": "button",
                               "value": "remove group",
                               "class": "btn btn-danger",
                               "onclick": "remove_parent_block(this, '.group_block')"});

  setAttributes(add_block, {"type": "button",
                               "value": "add block",
                               "class": "add_block btn btn-primary",
                               "onclick": "add_group_block(this, '.group_block', 'outer')"});

  setAttributes(add_field, {"type": "button",
                               "value": "add_field",
                               "class": "add_field btn btn-primary",
                               "onclick": "add_group_block(this, '.group_block', 'inner')"});

  setAttributes(group_name, {"type": "text",
                                "placeholder": "group name",
                                "class": "gr_name btn btn-outline-primary",
                                "size": 10});

  setAttributes(value, {"type": "text",
                        "placeholder": "value",
                        "class": "value btn btn-outline-primary",
                        "size": 10});

  container.append(remove_group);
  container.append(add_block);
  container.append(add_field);
  container.append(var_type);
  container.append(group_name);
  container.append(contain);
  container.append(value);
  gr.append(container);



}


function add_group_block(elem, parent_class, type){
  console.log(parent_class)
  const group_block = elem.closest(parent_class);
  const container = document.createElement("div");
  const block_operator = document.createElement("select");
  const contain = document.createElement("select");
  const value = document.createElement("input");
  const add_field = document.createElement("input");
  const remove_group_block = document.createElement("input");

  if (type=='inner'){
    setAttributes(container, {"class": "inner_field"});
  } else {
    setAttributes(container, {"class": "outer_field"});
  }



  setAttributes(block_operator, {"class": "block_operator btn-primary btn-group"})
  add_options(block_operator, ["AND", "OR"]);

  setAttributes(contain, {"class": "questiontype btn-primary btn-group"})
  add_options(contain, ["contain", "not contain"]);

  setAttributes(add_field, {"type": "button",
                               "value": "add_field",
                               "class": "add_field btn btn-primary",
                               "onclick": `add_group_block(this, '${parent_class}', 'inner')`});

  setAttributes(value, {"type": "text",
                        "placeholder": "value",
                        "class": "value btn btn-outline-primary",
                        "size": 10});

  setAttributes(remove_group_block, {"type": "button",
                               "value": "remove block",
                               "class": "btn btn-danger",
                               "onclick": `remove_parent_block(this, '${parent_class}')`});


  container.append(block_operator);
  container.append(contain);
  container.append(add_field);
  container.append(remove_group_block);
  group_block.append(container);



}

/************* */


function makeCounter() {
  var currentCount = 1;

  return { // возвратим объект вместо функции
    getNext: function() {
      return currentCount++;
    },

    set: function(value) {
      currentCount = value;
    },

    reset: function() {
      currentCount = 1;
    },
    
    back: function(){
      return currentCount - 1;
    }
  };
}

var counter = makeCounter();


function convert_details(y){

  var output="";

  if (y==="inner"){
    output="( ";} else if(y==="outer") {
    output=" ) ";} else if (y==="equal"){
    output=" " ;} else if (y==="grepl") {
    output="contains ";} else if (y==="ngrepl"){
    output="doesn't contain ";} else if (y==="equal1"){
    output=" = ";} else if (y==="more"){
    output=" > ";} else if (y==="moreequal"){
    output=" >= ";} else if (y==="less"){
    output=" < ";} else if (y==="lessequal"){
    output=" <= ";}else if (y==="notequal"){
    output=" != ";} else if (y==="AND"){
    output=" AND ";} else if (y=="OR"){
    output=" OR ";
    }

    
 return output;
}


function getFile() {
      Files = document.getElementById("survey").files;
      nFiles = Files.datapath;
	  Shiny.onInputChange('path',  Files);
	  }



function get_groups(){

////////////////////////////////////////////////////////////PART ONE: WORK WITH GROUPS TABLE//////////////////////////////////////////////////////////////////
 
  var source=document.getElementById("QGroups").children;
  var table = document.getElementById("QGroups_table");
 if (document.getElementById("QGroups").childElementCount===0){
   alert("Please, define at least one Group of questions");
 table.innerHTML=""} else { //if there is no group, alert, of there is groups -> draw a table
var block_operand=""
  content='<tr><th>Group of questions</th><th>Condition</th></tr>' ;//form header of table

  for(i=0; i<source.length; i++){
   
 
    
    content+='<tr><td>'; //open concatenation of html-content of table
    content+=source[i].querySelector(".questiontype").value;
    content+=" ";
    content+=source[i].querySelector(".gr_name").value ;//get (and add) group name
    content+='</td><td>' ;//close first column and open second
    

   var add_block = source[i].querySelectorAll(".block"); //get all blocks

  for(j=0; j<add_block.length;j++){ //loop trought each block
        
        if(j>0){block_operand = add_block[j].querySelector(".block_operand");} else {block_operand=""}
   // get operand of block 
   
   var contains = add_block[j].querySelector(".block_containsornot"); //get all connections in block
   var defvalue = add_block[j].querySelector(".block_defvalue"); //get all operators in block

  content+=convert_details(block_operand.value) + "( " + convert_details(contains.value) + add_quotes(defvalue.value);
  

 var add_params = add_block[j].querySelectorAll(".group_detail");
    for(k=0;k<add_params.length;k++){
      
      type = add_params[k].querySelector(".add_type");
      containsornot = add_params[k].querySelector(".containsornot");
      dvalue = add_params[k].querySelector(".defvalue");
  
content+=convert_details(type.value)+convert_details(containsornot.value)+add_quotes(dvalue.value)
      
    }
    
    content+=" )";
    
      }
      
    content+='</td></tr>';
    
    }
 

  
  

  
  
  
 ////////////////////////////////////////////////////////////PART TWO: WORK WITH ORDINALS SPECIFICATIONS//////////////////////////////////////////////////////////////////  
     //collect all user inputs for ordinals
 
 
  var ordinals = document.getElementById("ordinals");
  var show = ordinals.querySelectorAll(".show_all"); //get all show options
  var ordinal_detail=document.querySelectorAll(".ordinal_detail");  
  result="";
   j=-1;
     for(i=0;i<show.length;i++){
    if(show[i].value=="yes"){
      details="yes"}   else if (show[i].value=="no") {
        
        j=j+1;
 var top =ordinal_detail[j].querySelectorAll(".top_bottom");
   var treshold = ordinal_detail[j].querySelectorAll(".treshold");
  var max=ordinal_detail[j].querySelectorAll(".max");
  var exclude=ordinal_detail[j].querySelectorAll(".exclude");
  var recode=ordinal_detail[j].querySelectorAll(".recode");
    
    
  if(treshold[0].value==="" || max[0].value===""){
    alert("Treshold and Max are mandatory fields, please comlete and try again");
    content="";
    break;
  }
    
     details=" n = "+ treshold[0].value+", n_max = " + max[0].value +", exclude = "+exclude[0].value+", recode = " + recode[0].value + ", top = "+top[0].value;
      }   
   result+=details;
   result+="@";
   details="";
}
table.innerHTML="<table>"+content+"</table>";
}
Shiny.onInputChange("Groups", QGroups_table.innerHTML, {priority: "event"});
//    Shiny.onInputChange("Groups", QGroups_table.innerHTML, {priority: "event"});  //assign groups table html to shiny variable
   
Shiny.onInputChange("Ordinals", result);
//   Shiny.onInputChange("Groups", QGroups_table.innerHTML, {priority: "event"});

 }




function show_ordinals(){
  var source = document.getElementById("QGroups").children;
 
  var above_table = document.getElementById("ordinals");
  above_table.innerHTML="";
     for (i = 0; i < source.length; i++) {
      if (source[i].querySelector(".questiontype").value == "ordinal") {
        above_table.innerHTML +="<div>"+
          source[i].querySelector(".gr_name").value +
          document.getElementById("ordinal_all").innerHTML+"</div>";
      }}}


function add_ordinals(elem){
  if(elem.value=='no'){
  var div = document.createElement('div');
  elem.parentNode.insertAdjacentHTML('beforeend', document.getElementById('ordinal_details').innerHTML);
  var body = document.querySelector('body');
  body.appendChild(div);} else {
    
  while (elem.parentNode.childElementCount > 2) {
    elem.parentNode.removeChild(elem.parentNode.lastChild);
}
  }
} 
 
 
//function submit_groups(){
  
   //collect all user inputs for ordinals

//  var ordinals = document.getElementById("ordinals");
//  var show = ordinals.querySelectorAll(".show_all"); //get all show options
//  var top =ordinals.querySelectorAll(".top_bottom");
//  var treshold = ordinals.querySelectorAll(".treshold");
//  var max=ordinals.querySelectorAll(".max");
//  var exclude=ordinals.querySelectorAll(".exclude");
//  var recode=ordinals.querySelectorAll(".recode");
//  result="";
  
//  for(i=0;i<show.length;i++){
//  if (show[i].value=='yes'){ //check of there are additional conditions
//    content=i+"|yes"} else { //i + yes if no conditions
    
    
 //    if(treshold[i].value==="" ||
//    max[i].value==="" ||
//    exclude[i].value===""){alert("Please, complete specification for ordinal questions and try again");
//      Shiny.onInputChange("Ordinals", "not_valid", {priority: "event"});
//    } 
    
// content=i+"|"+show[i].value+"|"+top[i].value+"|"+treshold[i].value+"|"+max[i].value
//      +"|"+exclude[i].value+"|"+recode[i].value; //all conditions merged together if no
//    }
//  result+=content;
 // resul+="@"  ;
 // } //append ith content to one field  
  
 
 //   Shiny.onInputChange("Ordinals", result, {priority: "event"});
 //   Shiny.onInputChange("Groups", QGroups_table.innerHTML, {priority: "event"});
//}




  
function get_audiences(){
 
  var table = document.getElementById("AGroups_table");
  var content="";

  if(document.getElementById("AGroups").childElementCount===0){
    alert("No audience defined: default is all respondents");
    table.innerHTML="";
    } else {
    let source = document.querySelectorAll(".audience_block")
    //if no audience defined, alert, else - draw table of audiences

    content='<tr><th>Audience</th><th>Specification</th></tr>' ;//form header of table

    for(i=0; i<source.length; i++){//#loop trough each audience
        console.log(i)
        console.log(content)
        console.log(source[i])
        content+='<tr><td>'; //open concatenation of html-content of table
        content+=source[i].querySelector(".au_name").value;
        content+='</td><td>'; //close first column and open second
        console.log(content)
        var add_block = source[i].querySelectorAll(".audience_block"); //get all blocks
        console.log(add_block)
        for(j=0; j<add_block.length;j++){ //loop trought each block
            if(j>0){
            var block_operand = add_block[j].querySelector(".block_operand");
            } else {
            var block_operand=""
            }
       // get operand of block
       console.log("!!!!")
       var block_varname = source[i].querySelector(".block_var_name"); //get all connections in block
       var block_operator = source[i].querySelector(".block_operator"); //get all operators in block
       var block_varvalue = source[i].querySelector(".block_var_value"); //get all operators in block
       var operand = source[i].querySelector(".block_operand")

       content+=convert_details(block_operand.value)+
                  "("+block_varname.value+convert_details(block_operator.value)+
                  add_quotes(block_varvalue.value); //add defintion from block
        console.log(content)

      var add_params = add_block[j].querySelectorAll(".audience_detail"); //get all details in block
      if(add_params.length>0){
      for(k=0;k<add_params.length;k++){
          var add_type = add_params[k].querySelector(".audience_add_type"); //get all types in block
          var varname = add_params[k].querySelector(".var_name"); //get all connections in block
          var operator = add_params[k].querySelector(".operator"); //get all operators in block
          var varvalue = add_params[k].querySelector(".var_value"); //get all operators in block

          content+=convert_details(add_type.value)+varname.value+convert_details(operator.value)+add_quotes(varvalue.value);
      
    }}
    
    content+=" )";
      }
    content+='</td></tr>';
    }
  }
  table.innerHTML="<table>"+content+"</table>";
}

function remove_params(elem) {
  var div = document.createElement('div');
  elem.parentNode.remove();
    t=counter.back()
  tt=document.getElementbyID("content"+tt)
  if (tt=NULL){counter.set(counter.back()) }
 
}




function remove_group(elem) {
  var div = document.createElement("div");
  var deleted_group = elem.parentNode.querySelector(".gr_name").value;
  var was_ordinal = elem.parentNode.querySelector(".questiontype").value == "ordinal";
  if (was_ordinal){
    var above_table = document.getElementById("ordinals");
    var source = document.getElementById("QGroups").children;
    var deleting_index=0;
    var ordinals_q=0;
    for(i=0; i<source.length;i++){
      if (source[i].querySelector(".questiontype").value=="ordinal"){ordinals_q=ordinals_q+1;}      
      if (source[i].querySelector(".gr_name").value == deleted_group)
             {deleting_index=i};
  //      source[i].innerHTML=source[i].innerHTML.replace(deleted_group, '')
    } //get order of children of ordinals to be removed
            deleting_index=deleting_index-ordinals_q-1
    
         if (deleting_index<0){deleting_index=0}
          
          above_table.removeChild(above_table.childNodes[deleting_index]);}
  elem.parentNode.parentNode.remove();

  t = counter.back();
  
  }


function remove_parent_block(elem, selector_name){
    elem.closest(selector_name).remove()
}

function get_rows_groups(){
  var row_group = document.querySelector("#row_group").value
  Shiny.onInputChange("Row_Groups", row_group);
  var to_spread = document.querySelector("#to_spread").value
  Shiny.onInputChange("To_Spread", to_spread);
  
}


function add_quotes(x){
    var regex=/[a-zA-Z]/;
    if (x.match(regex)){
      x="'"+x+"'"}
return x}



function labels_on(){
  


   
  document.getElementById("survey_labels").style.zIndex = "10";
  document.getElementById("summary").style.zIndex = "1"; 
  document.getElementById("labels_tab").setAttribute("class", "nav-link active")
  document.getElementById("output_tab").setAttribute("class", "nav-link")



$(document).on('shiny:busy', function(event) {
  
  document.getElementById("loading").style.display = "block";
    document.getElementById("loading").style.zIndex = "999";  
  
});
}


function output_on(){
  document.getElementById("survey_labels").style.zIndex = "1";
  document.getElementById("summary").style.zIndex = "10"; 
    document.getElementById("labels_tab").setAttribute("class", "nav-link")
  document.getElementById("output_tab").setAttribute("class", "nav-link active")



}



