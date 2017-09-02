// require.config({
//   baseUrl : '/public/assets',
//   paths : {
//     jquery : 'jquery/jquery',
//     cookie : 'jquery-cookie/jquery.cookie',
//     template : 'artTemplate/template-web',
//     common : '../js/common',
//     login : '../js/login'
//   }
// });

require.config({
	baseUrl:'/public/assets',
	paths:{
		jquery:'jquery/jquery',
		cookie:'jquery-cookie/jquery.cookie',
		template:'artTemplate/template-web',
		bootstrap:'bootstrap/js/bootstrap.min',
		common:'../js/common',
		login:'../js/login',
		index:'../js/index',
		teacherlist:'../js/teacher-list',
		teacheradd:'../js/teacher-add',
		util:'../js/util'
	},
	//shim垫片，用来转换为模块化
	shim:{
		bootstrap:{
			deps:['jquery']
		}
	}
});