
# Commonly Used HTTP Error Codes

## Introduction

In web development, it is important to understand the most frequently used HTTP status codes to handle requests and responses effectively. Below is a list of practical codes grouped by category, with clear descriptions and usage scenarios.

---

##  Successful Responses

| Code | Name | Description | Usage |
|------|------|-------------|-------|
| 200 | OK | Standard response for successful requests. | GET request success. |
| 201 | Created | Request succeeded, and a resource was created. | POST request creating data. |
| 204 | No Content | Request succeeded, but no content to return. | DELETE request success, or update with no response body. |

---

##  Client Error Responses

| Code | Name | Description | Usage |
|------|------|-------------|-------|
| 400 | Bad Request | Server cannot process the request due to client error (syntax error, invalid data). | Invalid JSON body or missing fields. |
| 401 | Unauthorized | Request requires authentication. | Missing or invalid authentication token. |
| 403 | Forbidden | Server understands request but refuses to authorize it. | Authenticated user lacks permission. |
| 404 | Not Found | Server cannot find the requested resource. | Invalid endpoint or resource ID. |
| 405 | Method Not Allowed | Request method is known but not allowed for the resource. | Sending POST to a GET-only endpoint. |
| 409 | Conflict | Request conflicts with current resource state. | Creating a duplicate resource. |
| 422 | Unprocessable Entity | Server understands the request but it has semantic errors. | Validation failures in request body. |
| 429 | Too Many Requests | Client sent too many requests in a given time (rate limiting). | API rate limit exceeded. |

---

##  Server Error Responses

| Code | Name | Description | Usage |
|------|------|-------------|-------|
| 500 | Internal Server Error | Generic server error, something went wrong on the server side. | Unhandled exceptions or crashes. |
| 502 | Bad Gateway | Server acting as a gateway received invalid response from upstream server. | Proxy issues, API gateway errors. |
| 503 | Service Unavailable | Server is not ready to handle the request (maintenance or overload). | Downtime or scaling issues. |
| 504 | Gateway Timeout | Server acting as a gateway did not receive response in time. | Upstream server timeout. |

---

##  Quick Reference Table

| Category | Codes |
|----------|-------|
| Successful | 200, 201, 204 |
| Client Errors | 400, 401, 403, 404, 405, 409, 422, 429 |
| Server Errors | 500, 502, 503, 504 |

---

## Conclusion

These are the most commonly used HTTP status codes you will encounter while building and consuming APIs. Understanding their meanings helps you:

- Design clean REST APIs  
- Handle errors gracefully in frontend and backend  
- Improve debugging and user experience

---

