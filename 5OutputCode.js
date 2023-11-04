// //1.
// Promise.resolve()
// .then(() => console.log(1))
// .catch(() => console.log(3))
// .then(() => { console.log(2); throw new Error(); })
// .then(() => console.log(4))
// .then(() => console.log(4))
// Promise.resolve()
// .then(() => console.log(11))
// .then(() => { console.log(12); throw new Error(); })
// .catch(() => console.log(13))
// .catch(() => console.log(14))
// .then(() => console.log(15))

// //Kody ashxatume hetevyal hertakanutyamb,yndhanur kody ashxatum e tox ar tox(kopit asac);
// //1)Arajin Promise.resolve handisanalov sinxron,ashxatelov kanchemue .theny(vory asinxrone) tpum 1,ev ancnum hajord Promisin
// //vory nuynpes ashxatelov tpume nra araji .theny 11,aynuhetev bardzranume verev qani vor .then er kanchel hajordy pntrume noric .then,
// //bayc qani vor .catch e antesume ev ancnum hajord Promisin:Vori verjiny .then er pntrume .then,ev qani vor nra hajory bavararume ashxatum e,
// //tpum 12 u talis Error:Noric bardzranum e verevi Promis vori verjin ashxatacy .then er hajordy bavararelov tpume 2 ev talis Error:
// //Ijnum e nerqevi Promise,vori verjiny Error er,aysinqn pntrume .catch,vori hajordy bavararume ev tpume 13:Bardzranum e verevi Promise 
// // vori verjiny Error er,ir hajordy .then e ,antesum e ev ancnum hajordin:Qani vor nerqevi Promisi verjiny .catch er hajordy mane galis .then,
// //ev hajordy anteselov bardzranum e verevi Promise,vereviny noric chbavavrelov ijnum e nerqev vori verjiny .catch er isk verjins pntrum e .then,
// //bavararelov tpume 15 ev bardzranum verev:Verevi verji tarry chbavararelov talise ir verjin arjeqy vory Error e:
// //Aysinq kody tpume 1,11,12,2,13,15,Error:



// //2.
// Promise.resolve()
//   .then((data) => {
//     throw new Error("Api Error");
//     return 1;
//   })
//   .then((data) => console.log("ok"))
//   .catch((error) => {
//     console.log(error.message);
//     return "2";
//   })
//   .then((data) => {
//     console.log(data);
//   });

// //Kody skzbic nayume then in,vory talis e error(irenic heto return el chi ashxatum),ancnume .catch in vori mej loge anum new Errori meji messagey ,heto return anum 2y:
// //Ktpi Api Error,2



// //3.
// console.log(1)
// setTimeout(() => {
// console.log(2)
// }, 20)
// Promise.resolve()
// .then(() => {
// console.log(3)
// return 1
// })
// .catch(e => console.log(e, 4))
// .finally((res) => console.log(res, 5))
// .then((res) => console.log(res))
// console.log(6)

// //1)Tpume logery(sinxornnery) kodi meji 1,heto 6y,heto ashxatume asinxronnery
// //2)Ashxatume setTimeouty vory gnume macrotask u spasum 
// //3)Ashxatume Promisey,vory tpume skzbum 3,aynuhetev finallyin vory tpume undefined,5(qni vor res ir mot undefinede),heto tpume .thrny vory talise naxord theni veradardzrac arjeqy 1
// //4)Verjum ashxatum e setTimeouty,vory talise 2:
// //Aysinqn tpume 1,6,3,(undefined,5),1,2:



// //4.
//  let a = 5;
// setTimeout(() => {
// console.log(a);
// a = 10;
// }, 0);

// let p = new Promise((resolve, reject) => {
// console.log(a);
// a = 25;
// resolve();
// });

// p.then(res => {
// console.log('final result ', res)
// });
// console.log(a);

//1)Skzbic tpume sinxronnery ayisnqn,79-82 toxery nuynpes sinxrona,dra hamar tpuma 5,heto poxum a n 25;
//2)Tpume kodi verji sinxron logy vory 25 e;
//2)Ashxatume setTimeouty gnalov macrotask
//3)Ashxatume Promise y,tpume theni meji logy 'finaly result',undefined(qani vor resolve ov ban cheinq poxance):
//4)verjum ashxatume setTimeouty vory tpume 25 noric qani vor globalum 25 er:
//Kody tpume verjnakan 5,25,final result undefined,25