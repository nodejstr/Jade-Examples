exports.index = function (req, res) {
    res.render('index');
}

exports.loopSample = function (req, res) {
    res.render('loopSample', {items: [{adi: 'Apple'}, {adi: 'Pear'}, {adi: 'Grape'}, {adi: 'Cherry'}]});
}
exports.usingTemplate = function (req, res) {
    res.render('usingTemplate', {listTitle:'Galatasaray Player List',players: [{number:4,  name:'Hamit ALTINTOP'}, {number:5,  name:'Gökhan ZAN'}, {number:7,  name:'Aydın YILMAZ'}, {number:8,  name:'Selçuk İNAN'}, {number:9,  name:'Johan ELMANDER'}, {number:10,  name:'Felipe MELO'}, {number:11,  name:'Albert RIERA'}, {number:12,  name:'Didier DROGBA'}, {number:13,  name:'Dany NOUNKEU'}, {number:14,  name:'Wesley SNEIJDER'}, {number:17,  name:'Burak YILMAZ'}, {number:19,  name:'Umut BULUT'}, {number:22,  name:'Hakan BALTA'}, {number:23,  name:'Furkan ÖZÇAL'}, {number:25,  name:'Fernando MUSLERA'}, {number:26,  name:'Semih KAYA'}, {number:27,  name:'Emmanuel EBOUE'}, {number:30,  name:'Tomas UJFALUSI'}, {number:33,  name:'Çağlar BİRİNCİ'}, {number:35,  name:'Yekta KURTULUŞ'}, {number:50,  name:'Engin BAYTAR'}, {number:52,  name:'Emre ÇOLAK'}, {number:53,  name:'Nordin AMRABAT'}, {number:55,  name:'Sabri SARIOĞLU'}, {number:67,  name:'Eray İŞCAN'}, {number:82,  name:'Aykut ERÇETİN'}, {number:86,  name:'Ufuk CEYLAN'}]});
}

