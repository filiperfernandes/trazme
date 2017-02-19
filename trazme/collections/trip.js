import { Meteor } from 'meteor/meteor'

Trip = new Mongo.Collection('trip');

Trip.allow({
	insert: function(){
		return true;
	},
	remove: function(){
		return true;
	}
});

var cities = ["Abrantes","Aguiar da Beira","Alandroal","Albergaria-a-Velha","Albufeira","Alcanena","Alcobaça","Alcochete","Alcoutim","Alcácer do Sal","Alenquer","Alfandega da Fé","Alijó","Aljezur","Aljustrel","Almada","Almeida","Almeirim","Almodôvar","Alpiarça","Alter do Chão","Alvaiázere","Alvito","Amadora","Amarante","Amares","Anadia","Angra do Heroísmo","Ansião","Arcos de Valdevez","Arganil","Armamar","Arouca","Arraiolos","Arronches","Arruda dos Vinhos","Aveiro","Avis","Azambuja","Baião","Barcelos","Barrancos","Barreiro","Batalha","Beja","Belmonte","Benavente","Bombarral","Borba","Boticas","Braga","Bragança","Cabeceiras de Basto","Cadaval","Caldas da Rainha","Calheta (Madeira)","Calheta (São Jorge)","Caminha","Campo Maior","Cantanhede","Carrazeda de Ansiães","Carregal do Sal","Cartaxo","Cascais","Castanheira de Pêra","Castelo Branco","Castelo de Paiva","Castelo de Vide","Castro Daire","Castro Marim","Castro Verde","Celorico da Beira","Celorico de Basto","Chamusca","Chaves","Cinfães","Coimbra","Condeixa-a-Nova","Constância","Coruche","Corvo","Covilhã","Crato","Cuba","Câmara de Lobos","Elvas","Entroncamento","Espinho","Esposende","Estarreja","Estremoz","Fafe","Faro","Felgueiras","Ferreira do Alentejo","Ferreira do Zêzere","Figueira da Foz","Figueira de Castelo Rodrigo","Figueiró dos Vinhos","Fornos de Algodres","Freixo Espada à Cinta","Fronteira","Funchal","Fundão","Gavião","Golegã","Gondomar","Gouveia","Grândola","Guarda","Guimarães","Góis","Horta","Idanha-a-Nova","Lagoa (Algarve)","Lagoa (São Miguel)","Lagos","Lajes das Flores","Lajes do Pico","Lamego","Leiria","Lisboa","Loulé","Loures","Lourinhã","Lousada","Lousã","Macedo de Cavaleiros","Machico","Madalena","Mafra","Maia","Mangualde","Manteigas","Marco de Canaveses","Marinha Grande","Marvão","Matosinhos","Mação","Mealhada","Meda","Melgaço","Mesão Frio","Mira","Miranda do Corvo","Miranda do Douro","Mirandela","Mogadouro","Moimenta da Beira","Moita","Monchique","Mondim de Basto","Monforte","Montalegre","Montemor-o-Novo","Montemor-o-Velho","Montijo","Monção","Mora","Mortágua","Moura","Mourão","Murtosa","Murça","Mértola","Nazaré","Nelas","Nisa","Nordeste","Odemira","Odivelas","Oeiras","Oleiros","Olhão","Oliveira de Azeméis","Oliveira de Frades","Oliveira do Bairro","Oliveira do Hospital","Ourique","Ourém","Ovar","Palmela","Pampilhosa da Serra","Paredes de Coura","Paredes","Paços de Ferreira","Pedrógão Grande","Penacova","Penafiel","Penalva do Castelo","Penamacor","Penedono","Penela","Peniche","Peso da Régua","Pinhel","Pombal","Ponta Delgada","Ponta do Sol","Ponte da Barca","Ponte de Lima","Ponte de Sor","Portalegre","Portel","Portimão","Porto de Mós","Porto Moniz","Porto Santo","Porto","Povoação","Praia da Vitória","Proença-a-Nova","Póvoa de Lanhoso","Póvoa de Varzim","Redondo","Reguengos de Monsaraz","Resende","Ribeira Brava","Ribeira de Pena","Ribeira Grande","Rio Maior","Sabrosa","Sabugal","Salvaterra de Magos","Santa Comba Dão","Santa Cruz da Graciosa","Santa Cruz das Flores","Santa Cruz","Santa Maria da Feira","Santa Marta de Penaguião","Santana","Santarém","Santiago do Cacém","Santo Tirso","Sardoal","Seia","Seixal","Sernancelhe","Serpa","Sertã","Sesimbra","Setúbal","Sever do Vouga","Silves","Sines","Sintra","Sobral de Monte Agraço","Soure","Sousel","Sátão","São Brás de Alportel","São João da Madeira","São João da Pesqueira","São Pedro do Sul","São Roque do Pico","São Vicente","Tabuaço","Tarouca","Tavira","Terras de Bouro","Tomar","Tondela","Torre de Moncorvo","Torres Novas","Torres Vedras","Trancoso","Trofa","Tábua","Vagos","Vale de Cambra","Valença","Valongo","Valpaços","Velas","Vendas Novas","Viana do Alentejo","Viana do Castelo","Vidigueira","Vieira do Minho","Vila de Rei","Vila do Bispo","Vila do Conde","Vila do Porto","Vila Flor","Vila Franca de Xira","Vila Franca do Campo","Vila Nova da Barquinha","Vila Nova de Cerveira","Vila Nova de Famalicão","Vila Nova de Foz Côa","Vila Nova de Gaia","Vila Nova de Paiva","Vila Nova de Poiares","Vila Pouca de Aguiar","Vila Real de Santo António","Vila Real","Vila Velha de Rodão","Vila Verde","Vila Viçosa","Vimioso","Vinhais","Viseu","Vizela","Vouzela","Águeda","Évora","Ílhavo","Óbidos"];


TripSchema = new SimpleSchema({


	user: {
		type: AccountsTemplates,
		label: "User",
		autoform: {
			type: "hidden"
		},
		autoValue: function() {
			return this.userId;
		},
	},

	origin: {
		type: String,
		label: "Origem",
		allowedValues: cities,
	},

	destination: {
		type: String,
		label: "Destino",
		allowedValues: cities,
	},

	data: {
		type: String,
		label: "Data",
	},

	createdAt: {
		type: Date,
		label: "date",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		},
	},
});

Trip.attachSchema(TripSchema);

