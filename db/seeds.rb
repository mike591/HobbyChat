# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.create(name: 'Art', image_url: "art.png");
Board.create(name: 'Games', image_url: "games.png");
Board.create(name: 'Sports', image_url: "sports.png");
Board.create(name: 'Cats', image_url: "cats.png");
Board.create(name: 'News', image_url: "news.png");
Board.create(name: 'Coding', image_url: "coding.png");
