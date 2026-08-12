-- Optional YouTube VOD link per match, shown on the match detail page so visitors can
-- watch the game the way Liquipedia's tournament bracket pages link out to VODs. Manually
-- filled in for now (same as the rest of the seeded match data); once the LiquipediaDB API
-- is approved, `queryMatches()` can populate this from the match's `stream`/vod fields.
alter table matches add column vod_url text;
