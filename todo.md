
# Todo Requirements  Api Design and Development



### Todo

- [] Journey list view

- [] Recommended

- [] List journeys

    If you don't implement pagination, use some hard-coded limit for the list length because showing several million rows would make any browser choke
    For each journey show departure and return stations, covered distance in kilometers and duration in minutes

## Additional
- [] Pagination

- [] Ordering per column
- [] Searching
- [] Filtering
- [] Station list
## Recommended
### List all the stations
##### Additional
- [] Pagination
- [] Searching
- [] Single station view
#### Recommended
- [] Station name
- [] Station address
- [] Total number of journeys starting from the station
- [] Total number of journeys ending at the station

#### Additional
- [] Station location on the map
- [] The average distance of a journey starting from the station
- [] The average distance of a journey ending at the station
- [] Top 5 most popular return stations for journeys starting from the station
- [] Top 5 most popular departure stations for journeys ending at the station
- [] Ability to filter all the calculations per month

### In Progress

- [ ]  

### Done ✓

- [x]  Data Cleaning

    - [x]  Importing Data all the data in csv format

    - [x]  Dropping the columns that are not needed(
        duration < 10 seconds
        distance < 10 meters
    )

    - [x]  Renaming the columns

    - [x]  Merging all the data into one dataframe

    - [x]  Saving the data into a Json file


- [x] API Design 

    - [x] Journey list view

    - [x] Connected to Mongodb cluster

    - [x] Pagination








