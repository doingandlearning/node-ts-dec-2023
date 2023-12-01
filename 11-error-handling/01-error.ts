// 1. Operational Error
//  - restart the server
//  - urgent -> text message, escalate the problem
//  - communicate with the user -> nicely formatted/stack trace

// 2. Developer Error
//  - invalid input
//  - wrong number of arguments

// Rules of Thumb
// - Be consistent, not ad-hoc
// - Try to trip into a failure code path as early as possible
//   (related, maybe? https://www.kevincunningham.co.uk/posts/ifs-and-fors/ )
// - Propagage errors to the part of the application that has sufficient
//   context to deal with it
