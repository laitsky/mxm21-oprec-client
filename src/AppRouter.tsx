import * as React from 'react';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as Oprec from './views/oprec';
import * as Auth from './views/auth';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/playground" exact component={Oprec.Playground} />
      <Route path="/jadwal-oprec" exact component={Oprec.Jadwal} />
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
      <Route path="/login" exact component={Auth.Login} />
      <Route path="/register" exact component={Auth.Register} />
      <Route
        path="/new-password"
        exact
        component={Auth.NewPassword}
      />
      <Route path="/" exact component={Oprec.SelamatDatang} />
    </Switch>
  );
};

export default AppRouter;
