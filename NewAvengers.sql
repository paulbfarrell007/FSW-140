USE avengers;
SELECT * FROM avengers;

-- INSERT INTO HerosRUS (name,intelligence,strength,speed,durability,combat,power)VALUES
-- ('Allen Walker',56,65,75,20,50,66),
-- ('Air Walker',33,22,96,44,33,81),
-- ('Sky Walker',77,88,50,86,100,95),
-- ('Water Walker',77,88,50,86,100,95),
-- ('Dust Walker',77,88,50,86,100,95),
-- ('Bread Walker',77,88,50,86,100,95),
-- ('Bond Walker',77,88,50,86,100,95),
-- ('Walter Walker',77,88,50,86,100,95),
-- ('Danny Walker',56,65,75,20,50,66),
-- ('Paul Walker',33,22,96,44,33,81),
-- ('Roger Walker',77,88,50,86,100,95),
-- ('Andy Walker',77,88,50,86,100,95),
-- ('Crazy Walker',77,88,50,86,100,95),
-- ('Solo Walker',77,88,50,86,100,95),
-- ('Woki Walker',77,88,50,86,100,95),
-- ('Mac Walker',77,88,50,86,100,95),
-- ('Every Walker',56,65,75,20,50,66),
-- ('Pod Walker',33,22,96,44,33,81),
-- ('ATAT Walker',77,88,50,86,100,95),
-- ('Darth Walker',77,88,50,86,100,95),
-- ('Red Walker',77,88,50,86,100,95),
-- ('Green Walker',77,88,50,86,100,95),
-- ('Blue Walker',77,88,50,86,100,95),
-- ('Oil Walker',77,88,50,86,100,95),
-- ('Oreo Walker',56,65,75,20,50,66),
-- ('F1 Walker',33,22,96,44,33,81),
-- ('Ice Walker',77,88,50,86,100,95),
-- ('Choco Walker',77,88,50,86,100,95),
-- ('Icecream Walker',77,88,50,86,100,95),
-- ('Bagel Walker',77,88,50,86,100,95),
-- ('James Walker',77,88,50,86,100,95),
-- ('Dune Walker',77,88,50,86,100,95);
-- ALTER TABLE HerosRUS ADD COLUMN interested INT;
-- UPDATE HerosRUS
-- SET Interested = 
-- (CASE WHEN rand() >0.5 THEN 1 ELSE 0 END);
-- SELECT * FROM HerosRUS;
-- ALTER TABLE HerosRUS ADD COLUMN favourite VARCHAR(42);
-- UPDATE HerosRUS
-- SET favourite = 
-- (CASE WHEN rand() <0.3 THEN 'Anthony Edward "Tony" Stark' 
-- WHEN rand() <0.6 THEN 'Victor Shade'
-- ELSE 'Robert Bruce Banner' END);

-- 5.
-- SELECT HerosRUS.name,avengers.name 
-- FROM HerosRUS
-- JOIN avengers
-- ON HerosRUS.favourite = avengers.name
-- WHERE HerosRUS.interested != 'interested'
-- "ERROR" AND TO_NUMBER ( interested,'99G999D9s' ) = 1

-- 6.
SELECT name, appearances
FROM avangers
WHERE appearances != 'Appearances'
AND TO_NUMBER ( appearances,'99G999D9s' ) > 1000
 
