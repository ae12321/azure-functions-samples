# azure-functions-sample

・メソッド名を取得できる
・URL を取得できる
・body を取得できる
・header 内容を取得できる
・クエリパラメータを取得できる
・パスパラメータを取得できる

クエリパラメータ vs パスパラメータ
・省略できるかどうか
・リソースの一意特定で必要かどうか

# 環境変数

PROJECT_DATABASE_HOST = localhost
PROJECT_DATABASE_PORT = 5432
PROJECT_DATABASE_DB = mydb
PROJECT_DATABASE_USER = sqluser
PROJECT_DATABASE_PASS = abcde12345

# 開発環境用

docker compose -f .\scripts\database.yml up -d

```




# Create New Project

言語選択: TypeScript
プログラミングモデル: Model V4
プロジェクト内の最初の関数のテンプレート: HTTP trigger
関数名: httpTrigger1


# ポートが使われている場合
func startに --port xxxxを渡す
v
npm start -- --port 7654


```
