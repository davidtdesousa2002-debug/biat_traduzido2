define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    return iatExtension({
        categories : [
            {
                name : 'Pessoas Negras',
                title : {
                    media : {word : 'Pessoas Negras'},
                    css : {color:'#31b404','font-size':'1.8em'},
                    height : 4,
                    startStimulus : { 
                        media : {word : 'Negro, Afro, Preto, Africano'}, 
                        css : {color:'#31b404','font-size':'1em'}, 
                        height : 2 
                    }
                }, 
                stimulusMedia : [ 
                    {word : 'Negro'}, {word : 'Afro'}, {word : 'Preto'}, {word : 'Africano'}, {word : 'Preta'}, {word : 'Afrodescendente'}
                ], 
                stimulusCss : {color:'#31b404','font-size':'2em'}
            },	
            {
                name : 'Pessoas Brancas', 
                title : {
                    media : {word : 'Pessoas Brancas'}, 
                    css : {color:'#31b404','font-size':'1.8em'}, 
                    height : 4,
                    startStimulus : { 
                        media : {word : 'Branco, Caucasiano, Europeu, Claro'}, 
                        css : {color:'#31b404','font-size':'1em'}, 
                        height : 2 
                    }
                }, 
                stimulusMedia : [ 
                    {word : 'Branco'}, {word : 'Caucasiano'}, {word : 'Europeu'}, {word : 'Claro'}, {word : 'Branca'}, {word : 'Caucasiana'}
                ], 
                stimulusCss : {color:'#31b404','font-size':'2em'}
            }
        ],
        attribute1 : {
            name : 'Bom',
            title : { media : {word : 'Bom'}, css : {color:'#0000FF','font-size':'1.8em'}, height : 4 },
            media : [ {word : 'Alegria'}, {word : 'Amor'}, {word : 'Paz'}, {word : 'Prazer'} ]
        },
        attribute2 : {
            name : 'Mau',
            title : { media : {word : 'Mau'}, css : {color:'#0000FF','font-size':'1.8em'}, height : 4 },
            media : [ {word : 'Ódio'}, {word : 'Dor'}, {word : 'Horrível'}, {word : 'Mal'} ]
        }
    });
});
