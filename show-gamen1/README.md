# 画面1を表示する

- Angular v15.2.4

## ワークスペースを作成する

ワークスペースを作成するディレクトリに移動する。
```
cd /home/mizuki/workspace/angular15
```

ワークスペースを作成する。
```
npx ng new show-gamen1
? Would you like to add Angular routing? (y/N)   -> [Yes]
? Which stylesheet format would you like to use? -> [SCSS]
```

ワークスペースに移動する。
```
cd show-gamen1
```

ローカルで実行する。
```
npx ng serve
```

ブラウザで表示する。
```
http://localhost:4200/
```

## 画面1のコンポーネントを追加する

ワークスペースに移動する。
```
cd /home/mizuki/workspace/angular15/show-gamen1
```

画面1のコンポーネントを追加する。
```
npx ng generate component gamen1
```

画面が見つからない場合のコンポーネントを追加する。
```
npx ng generate component page-not-found
```

## 画面1のコンポーネントを表示する

src/app/app.component.html
- 既存のコードを削除して以下の行だけにする。
```
<router-outlet></router-outlet>
```

src/app/app-routing.module.ts
- ルーティング情報を記述する。
```
import { Gamen1Component } from './gamen1/gamen1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'gamen1', component: Gamen1Component },
    { path: '', redirectTo: '/gamen1', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
```

src/app/app-routing.module.ts
- enableTracingでブラウザのコンソールにデバッグ出力を行う。
```
@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
```

ローカルで実行する。
```
npx ng serve
```

ブラウザで表示する。
```
http://localhost:4200/
```
