let receitas = [
{
    nome: 'PÃO FOFINHO SALGADO',
    ingredientes: 'Ingredientes: Farinha De Amendoim, Creme De Leite, Ovo, Parmesão, sal. MANTER REFRIGERADO OU CONGELADO.  Aquecer no microondas ou sanduicheira.  PESO: 250g'
},

{
    nome: 'PÃO DE QUEIJO RECHEADO LOW CARB',
    ingredientes: 'Ingredientes: Farinhas De Quinoa, Linhaça, Gergelim, Ovo,creme de leite, Queijo, Frango. MANTER REFRIGERADO OU CONGELADO. Aqueçer no microondas. PESO: 170g'
},
{
    nome: 'COXINHA DE FRANGO',
    ingredientes: 'Ingredientes: Frango, Batata Doce, Far. De Linhaça, Ovo, Mussarela, Açafrão, Orégano. MANTER REFRIGERADO OU CONGELADO. Aqueçer no microondas. PESO: 300g'
},
{
    nome: 'EMPADAS DE FRANGO ABERTA',
    ingredientes: 'Ingredientes  Frango, Farinha De Linhaça, Ovo, Mussarela, orégano. MANTER REFRIGERADO OU CONGELADO. Aquecer no microondas. Peso: 150g'
},
{
    nome: 'BOLINHA DE QUEIJO',
    ingredientes: 'Ingredientes:  Frango, Batata Doce, Mussarela, Gergelim. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no microondas. Peso: 280g'
},
{
    nome: 'MINI EMPADÃO',
    ingredientes: 'Ingredientes  Frango, Farinha De Linhaça, Ovo, Mussarela, Requeijão. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no microondas. Peso: 140g'
},
{
    nome: 'EMPADAS DE FRANGO',
    ingredientes: 'Ingredientes  Frango, Farinha De Linhaça, Ovo, Mussarela. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no microondas. Peso: 180g'
},
{
    nome: 'TORTINHA DE FRANGO',
    ingredientes: 'Ingredientes: Frango (massa e recheio), farinha de linhaça, ovo, açafrão, mussarela. Manter refrigerado ou congelado. Aquecer no microondas Peso: 140g'
},
{
    nome: 'TORTA SALGADA',
    ingredientes: 'Ingredientes : Farinha De Arroz, Polvilho e Amido , Ovo, azeite, Frango, Mussarela, Milho. Mantenha refrigerado ou congelado. Aquecer no microondas ou sanduicheira.   Peso: 280g'
},
{
    nome: 'MINI PIZZA FRANGO E MUSSARELA',
    ingredientes: 'Ingredientes: Farinha de quinoa, gergelim e linhaça, ovo,azeite, frango, mussarela, requeijão, molho  de tomate, orégano. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no microondas  PESO: 90g'
},
{
    nome: 'MINI PIZZA DE PRESUNTO E MUSSARELA',
    ingredientes: 'Ingredientes: Farinha de quinoa, gergelim e linhaça, azeite, ovo, presunto, mussarela, requeijão, molho  de tomate, oregano. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no microondas  PESO: 90g'
},
{
    nome: 'MINI PIZZA DE CALABREZA',
    ingredientes: 'Ingredientes: Farinha de quinoa, gergelim e linhaça, ovo,azeite, frango, calabresa,mussarela, requeijão, molho  de tomate. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no microondas  PESO: 90g'
},
{
    nome: 'PÃO DE MORANGA',
    ingredientes: 'Ingredientes: Farinha de amendoim e coco, moranga, azeite, adoçante, canela. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micorondas. PESO: 250g'
},
{
    nome: 'BOLO FRAPÊ',
    ingredientes: 'Ingredientes: Farinha de coco, óleo de coco, leite de coco, ovo, adoçante, cacau pó 100%. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no microondas. PESO: 250g'
},
{
    nome: 'BOLO DE MARACUJÁ',
    ingredientes: 'Ingredientes: Farinha de coco, óleo de coco, leite de coco, adoçante, polpa de maracujá. MANTENHA REFRIGERADO. Aquecer no microondas. PESO: 250g'
},
{
    nome: 'BOLO DE LIMÃO',
    ingredientes: 'Ingredientes: Farinha de coco, óleo de coco, leite de coco, ovo,  gelatina light de limão. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no microondas. Peso: 250g'
},
{
    nome: 'BOLO DE BANANA',
    ingredientes: 'Ingredientes  Banana, aveia em flocos, adoçante, ovo, azeite, canela. Manter refrigerado Peso: 250g'
},
{
    nome: 'BOLINHO DE BANANA',
    ingredientes: 'Ingredientes  Banana, aveia em flocos, adoçante, ovo, azeite, canela. Manter refrigerado Peso: 100g'
},
{
    nome: 'BOLINHO DE MAÇÃ C/ CANELA',
    ingredientes: 'Ingredientes  Maçã, aveia em flocos, adoçante, ovo, azeite, canela. Manter refrigerado Peso: 100g'
},
{
    nome: 'BOLO DE MAÇÃ C/ CANELA',
    ingredientes: 'Ingredientes  Maçã, aveia em flocos, adoçante, ovo, azeite, canela.Manter refrigerado Peso: 250g'
},
{
    nome: 'PÃO DE MEL',
    ingredientes: 'Ingredientes: Farinha de amendoim, mel, canela pó, cravo em pó, óleo de coco, ovo, cacau pó 100%, essência de baunilha. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas. Peso: 135g'
},
{
    nome: 'BOLO DE FUBÁ ',
    ingredientes: 'Ingredientes: Fubá, leite de coco, azeite, adoçante, ovo. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas. Peso:300g'
},
{
    nome: 'BOLO DE FUBÁ C/ COBERTURA DE GOIABADA',
    ingredientes: 'Ingredientes: Fubá, leite de coco, azeite, adoçante, ovo, goiabada. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas. Peso:300g'
},
{
    nome: 'BOLO DE CENOURA S/ GLUTÉN C/ GANACHE DE CHOCOLATE 70%',
    ingredientes: 'Ingredientes:Mix de farinhas s/ glutén, cenoura, azeite, adoçante, ovo, chocolate 70%, creme de leite. Manter refrigerado e aqueça no microondas. Peso:250g'
},
{
    nome: 'BOLINHO DE LARANJA',
    ingredientes: 'Ingredientes: Farinha de coco, leite de coco, essência de laranja, adoçante. Ovo.  MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas. Peso: 100g'
},
{
    nome: 'BOLINHO DE CACAU C/ GOTAS DE CHOCOLATE 70%',
    ingredientes: 'Ingredientes: Farinha de coco, leite de coco, cacau 100%, adoçante. Ovo, chocolate 70%. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas. Peso: 100g'
},
{
    nome: 'BOLO DE CENOURA LOW CARB',
    ingredientes: 'Ingredientes: Farinha de coco, cenoura, azeite, adoçante, ovo. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas.  Peso:220g'
},
{
    nome: 'BOLO DE CENOURA S/ GLÚTEN',
    ingredientes: 'Ingredientes: Farinha de arroz, polvilho, amido, cenoura, azeite, adoçante, ovo. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas.  Peso:250g'
},
{
    nome: 'BISCOITO SALGADO',
    ingredientes: 'Ingredientes: Farinha de gergelim, amendoim, linhaça, chia, açafrão, orégano, ovo. MANTER REFRIGERADO. Peso: 50g'
},
{
    nome: 'COOKIE',
    ingredientes: 'Ingredientes:  Farinha de gergelim, amendoim, chia,cacau 100%, adoçante, ovo. MANTENHA REFRIGERADO. Peso: 50g'
},
{
    nome: 'BROINHA',
    ingredientes: 'Ingredientes: Farinha de coco, amendoim, canela pó, adoçante, ovo. MANTER REFRIGERADO. Peso: 50g'
},
{
    nome: 'DOCINHO FUNCIONAL',
    ingredientes: 'Ingredientes: Farinha de amendoim, coco e gergelim, cacau 100%, leite de coco, chia , adoçante, essência de baunilha.MANTER REFRIGERADO. Peso: 80g'
},
{
    nome: 'CHOCOTONE TRUFADO',
    ingredientes: 'Ingredientes: Farinha de coco, amendoim, adoçante, ovo,  creme de leite, leite de coco, essência de panetone, chocolate 70%, cacau 100%. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas.  Peso: 480g'
},
{
    nome: 'MINI CHOCOTONE',
    ingredientes: 'Ingredientes: Farinha de amendoim, farinha de coco, adoçante, ovo, essência de panetone, gotas de chocolate 70%. MANTENHA REFRIGERADO OU CONGELADO. Aquecer no micoondas. Peso: 210g'
},
{
    nome: 'NEGRESCO',
    ingredientes: 'Ingredientes: Farinha de gergelim, amendoim, chia, cacau 100%, adoçante, ovo, pasta de amendoim. Manter refrigerado. Peso: 80g'
},
{
    nome: 'LANCHINHO',
    ingredientes: 'Ingredientes: Fainha de quinoa, gergelim e  linhaça, ovo, mussarela. Manter refrigerado ou congelado. Aquecer em microondas ou sanduicheira Peso: 70g'
},
{
    nome: 'BOMBOM RECHEADO DE PASTA DE AMENDOIM',
    ingredientes: 'Ingredientes: Chocolate 70%, Pasta de amendoim. Manter refrigerado.'
},
{
    nome: 'BOMBOM DE PRESTÍGIO',
    ingredientes: 'Ingredientes:Chocolate 70%, coco ralado, creme de leite, adoçante. Manter refrigerado.'
},
{
    nome: 'BOMBOM CROCANTE',
    ingredientes: 'Ingredientes:Chocolate 70%, Granola sem açucar. Manter refrigerado.'
},
{
    nome: 'BOMBOM RECHEADO DE MOUSSE',
    ingredientes: 'Ingredientes:Chocolate 70%, creme de leite, suco de maracujá, adoçante. Manter refrigerado. '
},
{
    nome: 'PÃO DE FORMA INTEGRAL',
    ingredientes: 'Ingredientes: Farinha integral, azeite, ovo, açúcar, sal, fermento biológico, sementes de chia, gergelim e linhaça.  Manter refrigerado. '
},
{
    nome: 'PATÊ DE RICOTA',
    ingredientes: 'Ingredientes:Ricota, bacon. Azeite, orégano, sal. Manter refrigerado. '
},
{
    nome: 'MISTO LOW CARB',
    ingredientes: 'Ingredientes:  Fainha de quinoa, gergelim e linhaça, ovo, mussarela, presunto. Manter refrigerado, aquecer sanduicheira . '
},
{
    nome: 'MESCLADINHOS DE CACAU',
    ingredientes: 'Ingredientes:Farinha de coco, óleo de coco, leite de coco, adoçante, cacau pó 100%. MANTENHA REFRIGERADO. PESO: 100g'
},

{
    nome: 'EMPADA INTEGRAL DE FRANGO E QUEIJO',
    ingredientes: 'Ingredientes: Aveia em flocos, ovo, azeite, sal, fermento. Recheio: Frango, queijo, milho. Mantenha refrigerado ou congelado( deixe descongelar na geladeira). Aqueça no microondas.'
},

{
    nome: 'MESCLADINHOS DE CACAU',
    ingredientes: 'Ingredientes:Farinha de coco, óleo de coco, leite de coco, adoçante, cacau pó 100%. MANTENHA REFRIGERADO. PESO: 100g'
},

{
    nome: '',
    ingredientes: ''
}
]