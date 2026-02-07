define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    return iatExtension({
        // Categorias de treino (Mammals/Birds) - Mantive por segurança
        practiceCategory1 : {
            name : 'Mamíferos',
            title : {
                media : {word : 'Mamíferos'},
                css : {color:'#31b404','font-size':'1.8em'},
                height : 4,
                startStimulus : { media : {word : 'Cães, Cavalos, Leões'}, css : {color:'#31b404','font-size':'1em'}, height : 2 }
            }, 
            stimulusMedia : [ {word : 'Cães'}, {word : 'Cavalos'}, {word : 'Leões'}, {word : 'Vacas'} ],
            stimulusCss : {color:'#31b404','font-size':'2em'}
        },	
        practiceCategory2 : {
            name : 'Pássaros', 
            title : {
                media : {word : 'Pássaros'}, 
                css : {color:'#31b404','font-size':'1.8em'}, 
                height : 4,
                startStimulus : { media : {word : 'Pombos, Cisnes, Corvos'}, css : {color:'#31b404','font-size':'1em'}, height : 2 }
            }, 
            stimulusMedia : [ {word : 'Pombos'}, {word : 'Cisnes'}, {word : 'Corvos'}, {word : 'Sabiás'} ],
            stimulusCss : {color:'#31b404','font-size':'2em'}
        },
        // CATEGORIAS REAIS - Note que mudei 'image' para 'word'
        categories : [
            {
                name : 'Pessoas negras',
                title : {
                    media : {word : 'Pessoas negras'},
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
                name : 'Pessoas brancas', 
                title : {
                    media : {word : 'Pessoas brancas'}, 
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
        base_url : {
            image : 'https://baranan.github.io/minno-tasks/images/'
        } 
    });
});
