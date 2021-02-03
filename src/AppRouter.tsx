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
      <Route path="/final-oprec" eaxct component={Oprec.FinalOprec} />
      <Route path="/login" exact component={Auth.Login} />
      <Route path="/request-token" exact component={Auth.Register} />
      <Route path="/register" exact component={Auth.NewPassword} />
      <Route
        path="/registration-list"
        exact
        component={Koor.RegistrationList}
      />
      <Route path="/" exact component={Oprec.SelamatDatang} />
    </Switch>
  );
};

export default AppRouter;
