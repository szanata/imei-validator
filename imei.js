$(function(){

  $('#imei').focus();
  
  //disable CTRL +A
  $(window).bind('keydown keyup keypress',function (e){
    if (e.keyCode === 65 && e.ctrlKey){
      return false;
    }
  });
  
  $('*').disableSelection();

  /**
  * creates the tooltip
  */
  $('body').append('<div id="tip-wrapper"><div id="tip-arrow-border"></div><div id="tip-arrow"></div><div id="tip-body"></div></div>');
  
  $('#tip-body').append('Thanks for using my imei validator app. Please visit my website on <a href="http://www.iceon.me" target="blank">iceon.me</a>');  
  
  function isIMEIValid(imei){
  
    if (!/^[0-9]{15}$/.test(imei)) {
      return false;
    }
    
    var 
      sum = 0,
      factor = 2,
      checkDigit,
      multipliedDigit;
    
    for (var i = 13, li = 0; i >= li; i--) {
      
      multipliedDigit = parseInt(imei.charAt(i), 10) * factor;

      sum += (multipliedDigit >= 10 ? ((multipliedDigit % 10) + 1) : multipliedDigit);
      
      (factor === 1 ? factor++ : factor--);
    }
    
    checkDigit = ((10 - (sum % 10)) % 10);
    
    return !(checkDigit !== parseInt(imei.charAt(14), 10))
  }

  var REPORTING_BODYS = [
    {
      number: 0,
      name: 'Test IMEI',
      location: 'Nations with 2-digit CCs'
    },{
      number: 1,
      name: 'PTCRB',
      location: 'United States'
    },{
      number: 2,
      name: 'Test IMEI',
      location: 'Nations with 3-digit CCs'
    },{
      number: 3,
      name: 'Test IMEI',
      location: 'Nations with 3-digit CCs'
    },{
      number: 4,
      name: 'Test IMEI',
      location: 'Nations with 3-digit CCs'
    },{
      number: 5,
      name: 'Test IMEI',
      location: 'Nations with 3-digit CCs'
    },{
      number: 6,
      name: 'Test IMEI',
      location: 'Nations with 3-digit CCs'
    },{
      number: 7,
      name: 'Test IMEI',
      location: 'Nations with 3-digit CCs'
    },{
      number: 8,
      name: 'Test IMEI',
      location: 'Nations with 3-digit CCs'
    },{
      number: 9,
      name: 'Test IMEI',
      location: 'Nations with 3-digit CCs'
    },{
      number: 10,
      name: 'DECT devices',
      location: 'nobody knows'
    },{
      number: 30,
      name: 'Iridium',
      location: 'United States (satellite phones)'
    },{
      number: 33,
      name: 'DGPT',
      location: 'France'
    },{
      number: 35,
      name: 'BABT',
      location: 'United Kingdom'
    },{
      number: 44,
      name: 'BABT',
      location: 'United Kingdom'
    },{
      number: 45,
      name: 'NTA',
      location: 'Denmark'
    },{
      number: 49,
      name: 'BZT / BAPT',
      location: 'Germany'
    },{
      number: 50,
      name: 'BZT ETS',
      location: 'Germany'
    },{
      number: 51,
      name: 'Cetecom ICT',
      location: 'Germany'
    },{
      number: 52,
      name: 'Cetecom',
      location: 'Germany'
    },{
      number: 53,
      name: 'TUV',
      location: 'Germany'
    },{
      number: 54,
      name: 'Phoenix Test Lab',
      location: 'Germany'
    },{
      number: 91,
      name: 'MSAI',
      location: 'India'
    },{
      number: 98,
      name: 'BAPT',
      location: 'United Kingdom'
    }
  ];

  var getReportingBody = function(num){

    for (var i = 0, l = REPORTING_BODYS.length; i < l;i++){
      if (num === REPORTING_BODYS[i].number){
        return REPORTING_BODYS[i];
      }
    }
    return null;

  }

	$("#result > a").bind("click",function(){
  
    $('#result').fadeOut(500, function(){
    
      $('#controls').fadeIn(500, function (){
      
        $('#imei').focus();
      });
    });
    return false;
  });
  
  $("#validate").bind("click",function(){

   
    $('#controls').fadeOut(500,function (){
            
      var 
        msg = '',
        imei = $("#imei").val(),
        r = null;
            
      if ( imei !== '' && isIMEIValid(imei) ){
      
        r = getReportingBody(parseInt(imei.substring(0,2)));
      
        if (r !== null){
            msg = 'It\'s a valid one, the Reporting Body is ' + r.name + ' from ' + r.location + '.'
        }else{
            msg = 'It\'s a valid one, but I don\'t known the Reporting Body =/.'
        }
        
      }else{
      
        msg = 'Sorry, this is invalid :\'(';
      }
        
      $('#result > span').text(msg);
      
      $('#result').fadeIn();
    });          
  });
});