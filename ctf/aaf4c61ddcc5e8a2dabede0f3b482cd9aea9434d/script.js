document.onmousemove = function(e){
var x = e.pageX;
var y = e.pageY;
e.target.title = "X is "+x+" and Y is "+y;
}

if (!document.hidden)
{
  (function()
  {
    $('.background').addClass('bg-reveal');
    legend();    
  })();

}  
function legend()
{
    var $lhc = $('#lhcL');
    var $sps = $('#spsL');
    var $ps = $('#psL');
    var $ad = $('#adL');
    var $ctf = $('#ctf3L');
    var $cngs = $('#cngsL');
    var $iso = $('#isoL');
    var $leir = $('#leirL');
    var $linac = $('#linacL');
    var $ntof = $('#ntofL');
   $lhc.on('click', function()
   {
      $lhc.toggleClass("lhcS");
      $('#path3680').toggleClass("lhcR");
    });
  $sps.on('click', function()
   {
      $sps.toggleClass("spsS");
      $('#path4489').toggleClass("spsR");
    });
  $ps.on('click', function()
   {
      $ps.toggleClass("psS");
      $('#path4495').toggleClass("psR");
    });
  $ad.on('click', function()
   {
      $ad.toggleClass("adS");
      $('#path4491').toggleClass("adR");
    });
  $ctf.on('click', function()
   {
      $ctf.toggleClass("ctfS");
      $('#path4533').toggleClass("ctfR");
      $('#rect4529').toggleClass("ctfR");
      $('#path4531').toggleClass("ctfR");
    });
  $cngs.on('click', function()
   {
      $cngs.toggleClass("cngsS");
      $('#path4503').toggleClass("cngsR");
    });
  $iso.on('click', function()
   {
      $iso.toggleClass("isoS");
      $('#path4521').toggleClass("isoR");
    });
  $leir.on('click', function()
   {
      $leir.toggleClass("leirS");
      $('#path4523').toggleClass("leirR");
      $('#rect4497').toggleClass("leirR");
      $('#path4525').toggleClass("leirR");
    });
  $linac.on('click', function()
   {
      $linac.toggleClass("linacS");
      $('#path4517').toggleClass("linacR");
    });
  $ntof.on('click', function()
   {
      $ntof.toggleClass("ntofS");
      $('#path4515').toggleClass("ntofR");
    });
      
}