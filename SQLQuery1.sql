create table Address
(
AddressID int identity primary key,
Street varchar(10),
City varchar(10),
State varchar(10),
Zipcode varchar(10)
)


create table Customer
(
CustomerID int identity primary key,
Name varchar(10),
Address int references Address(AddressID),
Telephone varchar(10)
)

create table Location
(
LocationID int identity primary key,
Type varchar(10),
Address int references Address(AddressID),

)

create table Rate
(
RateID int identity primary key,
RateClass varchar(10),
RateperKWH varchar(10)
)



