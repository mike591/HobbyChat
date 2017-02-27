# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
uid             | string    | not null, indexed, unique
provider        | string    | not null, indexed, unique
name            | string    | not null
oauth_token     | string    |
oauth_expires_at| datetime  |
created_at      | datetime  | not null
updated_at      | datetime  | not null


## Boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
img_url     | string    |

## Messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed
user_id     | integer   | not null, foreign key (references users), indexed
message     | text      | not null
