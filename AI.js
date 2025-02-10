//neural network function organiser
var output = "";
var update = "begin program: ";
var sentence1 = "";
var sentence2 = "";
var sentence = "";
var filesave = ""
var stage = 0;
var depth = 3;
var pos = 0;
var output2 = "";
function OnStart()
{


app.ShowPopup("initialising" );


	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	




var output = "";
var logicordershift = 1


	edtin  = app.CreateTextEdit( "", 0.96, 0.1); 
	edtin.SetTextSize(12 );
	lay.AddChild( edtin );
	edt = app.CreateTextEdit( "", 0.96, 0.2); 
	edt.SetTextSize(12 );
	lay.AddChild( edt );

	edt2= app.CreateTextEdit( "", 0.96, 0.4); 
	edt2.SetTextSize(12 );
	lay.AddChild( edt2 );


	btnLoad = app.CreateButton( "Actuate", 0.23, 0.1 ); 
	btnLoad.SetOnTouch( btnLoad_OnTouch ); 
	lay.AddChild( btnLoad ); 

	app.AddLayout( lay );
}


function btnLoad_OnTouch() 
{ 

 var db2 = "";

while(0==0){
output = "";

var txt = app.ReadFile( "/sdcard/undefined.txt" );
sentence = txt.split(".");

var input = edtin.GetText();
x = txt.indexOf(input);


for(var x = 0;x < sentence.length;x++){

terminator = output.split(" ");
if (terminator.length > 3){
filesave += output + "\n";
if (stage == depth){
x = pos-pos/5;
stage = 0;
output2 += "\n";
}


app.WriteFile( "/sdcard/output.txt",filesave, "append" );
break;
}


var q = 0;
var func = app.ReadFile( "/sdcard/function.txt" );


var functionorder = func.split("\n");
for (var c = x;c < sentence.length;c++){

c =  Math.floor(Math.random() * (sentence.length)) + 0;
var sent = sentence[c];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
for(var b = 0; b < functionorder.length;b++){
if(sent.indexOf(functionorder[b]) > -1){
var sent = sentence[c];
var word = sent.split(" ");
//a = b //functionorder
x = c/5;
pos = c;
x = Math.round(x);

if (q == 0){
output += "";
}
q = 1;
break;
}
}
if (q == 1){
break
}
}
if (q == 1){
break
}
}


var q = 0
var sent = sentence[x];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
  var txt = app.ReadFile( "/sdcard/verb.txt" );
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
output += wordstr+" ";
edt.SetText(output);
app.SetClipboardText( output);
}
}
}
}

var q = 0;
var sent = sentence[x];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
  var txt = app.ReadFile( "/sdcard/noun.txt" );
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
output += wordstr+" ";
edt.SetText(output);
app.SetClipboardText( output);
}
}
}
}

var q = 0;


var func = app.ReadFile( "/sdcard/parameters.txt" );
var functionorder = func.split("\n");
for (var c = x;c < sentence.length;c++){

c =  Math.floor(Math.random() * (sentence.length)) + 0;
var sent = sentence[c];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
for(var b = 0; b < functionorder.length;b++){
if(sent.indexOf(functionorder[b]) > -1){
var sent = sentence[c];
var word = sent.split(" ");
//a = b //functionorder
x = c/5;
c = pos;
x = Math.round(x);
if (q == 0){
output += "";

if (update.length > 1){
var updater = app.ReadFile( "/sdcard/parameters.txt" );
updater+= "\n" + update;
app.WriteFile( "/sdcard/parameters.txt",updater );

}
}
q = 1;
break;
}
}
if (q == 1){
break
}
}
if (q == 1){
break
}
}


var q = 0;
var func = app.ReadFile( "/sdcard/noun.txt" );
var functionorder = func.split("\n");
for (var c = x;c < sentence.length;c++){

c =  Math.floor(Math.random() * (sentence.length)) + 0;
var sent = sentence[c];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
for(var b = 0; b < functionorder.length;b++){
if(sent.indexOf(functionorder[b]) > -1){
var sent = sentence[c];
var word = sent.split(" ");
//a = b //functionorder
x = c;
if (q == 0){
output += "";
}
q = 1;
break;
}
}
if (q == 1){
break
}
}
if (q == 1){
break
}
}


var q = 0;
for(var y = 0;y < sentence.length;y++){
y =  Math.floor(Math.random() * (sentence.length - 0 + 1)) + 0


var sent = sentence[y];
var word = sent.split(" ");
for(var a = 0;a < word.length;a++){
  var txt = app.ReadFile( "/sdcard/adj.txt" );
var wordstr  = word[a];
var vocab = txt.split("\n");
for(var b = 0; b < vocab.length;b++){
if(wordstr == vocab[b]){
if (output.indexOf(wordstr) == -1){
output += wordstr+" ";
update = wordstr;
edt.SetText(output);
app.SetClipboardText( output);
q = 1;
}
}
}
}

if (q == 1){
break
}
}


}
/*
	var pitch = 1.0, speed = 1.0;
	app.TextToSpeech( output, pitch, speed );
*/



var download = output.split(" ");
var refreshermind = "";
for (var mind = 0; mind < download.length;mind++){
refreshermind+=  download[mind] + "\n";
app.WriteFile( "/sdcard/function.txt",refreshermind,"append");
}

if (output.indexOf("?") > -1){
output2+= ".";

}
 output2 += output +  "\n";
 
 edt2.SetText(output2);
}
}