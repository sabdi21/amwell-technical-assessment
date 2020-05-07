# Amwell-technical-assessment
### Task
Write a Javascript application that gets data from the following URL and returns the lowest three integers with no duplicates.
### URL
- https://www.iwillfearnoevil.com/screen/string.txt

## Approach
- I implemented fetch to retrieve text from the url. I was able to use cors-anywhere proxy to serve as a header.
- I used a service that proxies your request and automatically enable my request
-- Link: https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e
- Implemented a helper function to remove dublicates and sort the text data.
