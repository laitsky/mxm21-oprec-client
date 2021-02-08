import * as React from 'react';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as Oprec from './views/oprec';
import * as Auth from './views/auth';
import * as Koor from './views/koor';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/daftar-divisi"
        exact
        component={Oprec.DaftarDivisi}
      />
      <Route path="/data-diri" exact component={Oprec.DataDiri} />
      <Route
        path="/esai-singkat"
        exact
        component={Oprec.EsaiSingkat}
      />
      <Route
        path="/finalisasi-data"
        eaxct
        component={Oprec.FinalisasiData}
      />
      <Route path="/final-oprec" exact component={Oprec.FinalOprec} />
      <Route
        path="/absen-seleksi"
        exact
        component={Oprec.AbsenSeleksi}
      />
      <Route path="/check-nim" exact component={Oprec.CheckNIM} />
      <Route path="/congrats" exact component={Oprec.Congrats} />
      <Route path="/sorry" exact component={Oprec.Sorry} />
      <Route path="/login" exact component={Auth.Login} />
      <Route path="/request-token" exact component={Auth.Register} />
      <Route path="/register" exact component={Auth.NewPassword} />
      <Route
        path="/seleksi-form"
        exact
        component={Koor.RegistrationList}
      />
      <Route path="/god-mode" exact component={Koor.GodMode} />
      <Route
        path="/koor-lulusinterview"
        exact
        component={Koor.LulusInterview}
      />
      <Route
        path="/koor-seleksiterbuka"
        exact
        component={Koor.SeleksiTerbuka}
      />
      {/* <Route
        path="/logout"
        exact
        strict
        render={() => {
          window.sessionStorage.clear();
          window.location.replace('/');
        }}
      /> */}
      <Route path="/" exact component={Oprec.SelamatDatang} />
    </Switch>
  );
};

export default AppRouter;
