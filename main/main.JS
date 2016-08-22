$(document).ready(function(){	
	function check(){
		if($('#checkbox1').is(':checked')){
			var pokemonCount = parseInt($("#pokecount1").val());
			var candyCount = parseInt($("#candycount1").val());
			var reqCandy  =  parseInt($("#dropdown1 :selected").val());
			var evolveAmount = 0;
		
			evolveAmount =  Math.floor(((candyCount + pokemonCount) - 1) / (reqCandy));
			$("#p1").html(evolveAmount);
			}
		if($('#checkbox2').is(':checked')){
			var pokemonCount2 = parseInt($("#pokecount2").val());
			var candyCount2 = parseInt($("#candycount2").val());
			var reqCandy2  =  parseInt($("#dropdown2 :selected").val());
			var evolveAmount2 = 0;
		
			evolveAmount2 = Math.floor(((candyCount2 + pokemonCount2) - 1) / (reqCandy2));
			$("#p2").html(evolveAmount2);
			}
		if ($('#checkbox3').is(':checked')){
			var pokemonCount3 = parseInt($("#pokecount3").val());
			var candyCount3 = parseInt($("#candycount3").val());
			var reqCandy3  =  parseInt($("#dropdown3 :selected").val());
			var evolveAmount3 = 0;
		
			evolveAmount3 = Math.floor(((candyCount3 + pokemonCount3) - 1) / (reqCandy3));
			$("#p3").html(evolveAmount3);
			}
		}
	$("#compute").click(function(){
		check()
	});
	$(".mdl-textfield__input").keyup(function(event){
		if(event.keyCode == 13){
			$("#compute").click();
		}
	});

});