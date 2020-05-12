-- Database Queries

-- Find all customers with postal code 1010
select *
from customers 
where postalCode = 1010;

-- Find the phone number for the supplier with the id 11

-- select supplierId, (11)
-- from supplier
select phoneNumber
from supplier
where supplierId = 11;


-- List first 10 orders placed, sorted descending by the order date

select * 
from orders 
order by orderDate desc
limit 10;

-- Find all customers that live in London, Madrid, or Brazil
select * 
from customers
where city = London || Madrid || Brazil

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

insert into customer (customerName, customerAddress, customerTown, customerPostalCode, customerCountry, customerHomeLand, Description)
values ('Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth', 'The Shire', 'sneaky little hobbitses');

-- Update Bilbo Baggins record so that the postal code changes to "11122"

update customer
set customerName = 'Bilbo Baggins', description = 'sneaky little hobbitses'
where customerPostalCode = 11122;


-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
