angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('csJurDicasUNLaR.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.abogacA', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/abogacA.html',
        controller: 'abogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.escribanA', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/escribanA.html',
        controller: 'escribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.procuraciN', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/procuraciN.html',
        controller: 'procuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.gestiNJurDica', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gestiNJurDica.html',
        controller: 'gestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.subastadorYMartilleroPBlico', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subastadorYMartilleroPBlico.html',
        controller: 'subastadorYMartilleroPBlicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.planDeAbogacA2019', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeAbogacA2019.html',
        controller: 'planDeAbogacA2019Ctrl'
      }
    }
  })

  .state('csJurDicasUNLaR.planDeAbogacA1998', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeAbogacA1998.html',
        controller: 'planDeAbogacA1998Ctrl'
      }
    }
  })

  .state('csJurDicasUNLaR.planDeEscribanA', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEscribanA.html',
        controller: 'planDeEscribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.planDeProcuraciN', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeProcuraciN.html',
        controller: 'planDeProcuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.planDeGestiNJurDica', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeGestiNJurDica.html',
        controller: 'planDeGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.planDeSubastadorYMartillero', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeSubastadorYMartillero.html',
        controller: 'planDeSubastadorYMartilleroCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.perfilDelGraduadoDeAbogacA', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduadoDeAbogacA.html',
        controller: 'perfilDelGraduadoDeAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.perfilDelGraduadoDeEscribanA', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduadoDeEscribanA.html',
        controller: 'perfilDelGraduadoDeEscribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.perfilDelGraduadoDeProcuraciN', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduadoDeProcuraciN.html',
        controller: 'perfilDelGraduadoDeProcuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.perfilDelGraduadoDeGestiNJurDica', {
    url: '/page68',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduadoDeGestiNJurDica.html',
        controller: 'perfilDelGraduadoDeGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.perfilDelGraduadoDeSubastadorYMartillero', {
    url: '/page70',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduadoDeSubastadorYMartillero.html',
        controller: 'perfilDelGraduadoDeSubastadorYMartilleroCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.alcancesDelTTuloDeAbogado', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcancesDelTTuloDeAbogado.html',
        controller: 'alcancesDelTTuloDeAbogadoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.alcancesDelTTuloDeEscribano', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcancesDelTTuloDeEscribano.html',
        controller: 'alcancesDelTTuloDeEscribanoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.alcancesDelTTuloDeProcurador', {
    url: '/page67',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcancesDelTTuloDeProcurador.html',
        controller: 'alcancesDelTTuloDeProcuradorCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.alcancesDelTTuloDeGestiNJurDica', {
    url: '/page69',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcancesDelTTuloDeGestiNJurDica.html',
        controller: 'alcancesDelTTuloDeGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.alcancesDelTTuloDeSubastadorYMartillero', {
    url: '/page72',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcancesDelTTuloDeSubastadorYMartillero.html',
        controller: 'alcancesDelTTuloDeSubastadorYMartilleroCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horariosDeAbogacA', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horariosDeAbogacA.html',
        controller: 'horariosDeAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horariosDeEscribanA', {
    url: '/page73',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horariosDeEscribanA.html',
        controller: 'horariosDeEscribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horariosDeProcuraciN', {
    url: '/page74',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horariosDeProcuraciN.html',
        controller: 'horariosDeProcuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horariosDeGestiNJurDica', {
    url: '/page77',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horariosDeGestiNJurDica.html',
        controller: 'horariosDeGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horariosDeSubastadorYMartilleroPBlico', {
    url: '/page78',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horariosDeSubastadorYMartilleroPBlico.html',
        controller: 'horariosDeSubastadorYMartilleroPBlicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR', {
    url: '/side-menu21',
    templateUrl: 'templates/csJurDicasUNLaR.html',
    controller: 'csJurDicasUNLaRCtrl'
  })

  .state('csJurDicasUNLaR.bibliotecaDigitalDeAbogacA', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigitalDeAbogacA.html',
        controller: 'bibliotecaDigitalDeAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.bibliotecaDigitalDeEscribanA', {
    url: '/page79',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigitalDeEscribanA.html',
        controller: 'bibliotecaDigitalDeEscribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.bibliotecaDigitalDeProcuraciN', {
    url: '/page80',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigitalDeProcuraciN.html',
        controller: 'bibliotecaDigitalDeProcuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.bibliotecaDigitalDeGestiNJurDica', {
    url: '/page81',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigitalDeGestiNJurDica.html',
        controller: 'bibliotecaDigitalDeGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.bibliotecaDigitalDeSubastadorYMartilleroPBlico', {
    url: '/page82',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigitalDeSubastadorYMartilleroPBlico.html',
        controller: 'bibliotecaDigitalDeSubastadorYMartilleroPBlicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.1AOAbogacA', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AOAbogacA.html',
        controller: '1AOAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.programasDeAbogacA', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeAbogacA.html',
        controller: 'programasDeAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.programasDeEscribanA', {
    url: '/page95',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeEscribanA.html',
        controller: 'programasDeEscribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.programasDeProcuraciN', {
    url: '/page96',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeProcuraciN.html',
        controller: 'programasDeProcuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.programasDeGestiNJurDica', {
    url: '/page97',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeGestiNJurDica.html',
        controller: 'programasDeGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.programasDeSubastadorYMartilleroPBlico', {
    url: '/page99',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeSubastadorYMartilleroPBlico.html',
        controller: 'programasDeSubastadorYMartilleroPBlicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.2AOAbogacA', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AOAbogacA.html',
        controller: '2AOAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.3AOAbogacA', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AOAbogacA.html',
        controller: '3AOAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.4AOAbogacA', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AOAbogacA.html',
        controller: '4AOAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.5AOAbogacA', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AOAbogacA.html',
        controller: '5AOAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.extracurricularesAbogacA', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/extracurricularesAbogacA.html',
        controller: 'extracurricularesAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.introducciNAlDerecho', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNAlDerecho.html',
        controller: 'introducciNAlDerechoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoRomano', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoRomano.html',
        controller: 'derechoRomanoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoCivilIParteGeneral', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoCivilIParteGeneral.html',
        controller: 'derechoCivilIParteGeneralCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.introducciNALaFilosofA', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNALaFilosofA.html',
        controller: 'introducciNALaFilosofACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.historiaDelDerecho', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historiaDelDerecho.html',
        controller: 'historiaDelDerechoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.economAPolTica', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/economAPolTica.html',
        controller: 'economAPolTicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoCivilIIObligaciones', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoCivilIIObligaciones.html',
        controller: 'derechoCivilIIObligacionesCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoPolTico', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoPolTico.html',
        controller: 'derechoPolTicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.finanzasYDerechoTributario', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/finanzasYDerechoTributario.html',
        controller: 'finanzasYDerechoTributarioCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoComercialI', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoComercialI.html',
        controller: 'derechoComercialICtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.sociologA', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sociologA.html',
        controller: 'sociologACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.filosofADelDerecho', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/filosofADelDerecho.html',
        controller: 'filosofADelDerechoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoCivilIIIContratos', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoCivilIIIContratos.html',
        controller: 'derechoCivilIIIContratosCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoComercialIISociedades', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoComercialIISociedades.html',
        controller: 'derechoComercialIISociedadesCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoConstitucional', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoConstitucional.html',
        controller: 'derechoConstitucionalCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoPenalIParteGeneral', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoPenalIParteGeneral.html',
        controller: 'derechoPenalIParteGeneralCtrl'
      }
    }
  })

  .state('derechoInternacionalPBlicoYComunitario', {
    url: '/page29',
    templateUrl: 'templates/derechoInternacionalPBlicoYComunitario.html',
    controller: 'derechoInternacionalPBlicoYComunitarioCtrl'
  })

  .state('csJurDicasUNLaR.derechoLaboralYPrevicional', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoLaboralYPrevicional.html',
        controller: 'derechoLaboralYPrevicionalCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoCivilIVDerechosReales', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoCivilIVDerechosReales.html',
        controller: 'derechoCivilIVDerechosRealesCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoComercialIIIQuiebras', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoComercialIIIQuiebras.html',
        controller: 'derechoComercialIIIQuiebrasCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoPBlicoProvincialYMunicipal', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoPBlicoProvincialYMunicipal.html',
        controller: 'derechoPBlicoProvincialYMunicipalCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoPenalIIParteEspecial', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoPenalIIParteEspecial.html',
        controller: 'derechoPenalIIParteEspecialCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoProcesalCivilYLaboral', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoProcesalCivilYLaboral.html',
        controller: 'derechoProcesalCivilYLaboralCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoAgrarioForestalYMinero', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoAgrarioForestalYMinero.html',
        controller: 'derechoAgrarioForestalYMineroCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoCivilVFamiliaYSucesiones', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoCivilVFamiliaYSucesiones.html',
        controller: 'derechoCivilVFamiliaYSucesionesCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoDeNavegaciN', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoDeNavegaciN.html',
        controller: 'derechoDeNavegaciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoAdministrativo', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoAdministrativo.html',
        controller: 'derechoAdministrativoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.TicaProfesionalYPrCticaForense', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/TicaProfesionalYPrCticaForense.html',
        controller: 'TicaProfesionalYPrCticaForenseCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoProcesalPenal', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoProcesalPenal.html',
        controller: 'derechoProcesalPenalCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.derechoInternacionalPrivadoYComunitario', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/derechoInternacionalPrivadoYComunitario.html',
        controller: 'derechoInternacionalPrivadoYComunitarioCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.expresiNOralYEscrita', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.ingles', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingles.html',
        controller: 'inglesCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.informTica', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTica.html',
        controller: 'informTicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horarioIngresoAbogacA', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngresoAbogacA.html',
        controller: 'horarioIngresoAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horarioIngresoEscribanA', {
    url: '/page83',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngresoEscribanA.html',
        controller: 'horarioIngresoEscribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horarioIngresoProcuraciN', {
    url: '/page84',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngresoProcuraciN.html',
        controller: 'horarioIngresoProcuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horarioIngresoGestiNJurDica', {
    url: '/page85',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngresoGestiNJurDica.html',
        controller: 'horarioIngresoGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horarioIngresoSubastadorYMartilleroPBlico', {
    url: '/page86',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngresoSubastadorYMartilleroPBlico.html',
        controller: 'horarioIngresoSubastadorYMartilleroPBlicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario1CAbogacA', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1CAbogacA.html',
        controller: 'horario1CAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario1CEscribanA', {
    url: '/page87',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1CEscribanA.html',
        controller: 'horario1CEscribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario1CProcuraciN', {
    url: '/page88',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1CProcuraciN.html',
        controller: 'horario1CProcuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario1CGestiNJurDica', {
    url: '/page89',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1CGestiNJurDica.html',
        controller: 'horario1CGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario1CSubastadorYMartilleroPBlico', {
    url: '/page90',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1CSubastadorYMartilleroPBlico.html',
        controller: 'horario1CSubastadorYMartilleroPBlicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario2CAbogacA', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2CAbogacA.html',
        controller: 'horario2CAbogacACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario2CEscribanA', {
    url: '/page91',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2CEscribanA.html',
        controller: 'horario2CEscribanACtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario2CProcuraciN', {
    url: '/page92',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2CProcuraciN.html',
        controller: 'horario2CProcuraciNCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario2CGestiNJurDica', {
    url: '/page93',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2CGestiNJurDica.html',
        controller: 'horario2CGestiNJurDicaCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.horario2CSubastadorYMartilleroPBlico', {
    url: '/page94',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2CSubastadorYMartilleroPBlico.html',
        controller: 'horario2CSubastadorYMartilleroPBlicoCtrl'
      }
    }
  })

  .state('csJurDicasUNLaR.gUAUNLaR', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gUAUNLaR.html',
        controller: 'gUAUNLaRCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});