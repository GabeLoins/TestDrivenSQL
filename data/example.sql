-- Queries Chinook for all artists with self-titled albums.

select a.ArtistId, a.Name from Artist a, Album b
  where a.ArtistId = b.ArtistId and a.Name = b.Title
  order by a.Name asc;
