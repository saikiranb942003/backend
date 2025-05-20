 /* UUID (universally unique identifier) : 

-> a uuid is a 128 bit identifier used to uniquely identify objects 
or entities in a computer syastem 
-> uuid are standardized by the RFC 4122 specification

// uuid versions (v2 and v4)

-> uuids can be generated using different algorithms with each version serving a specific purpose 

// uuid v2 (DCE security UUID) 
-> it is used for distributed computing environment (DCE) security 
-> Generation method : combines a user provided identifier (such as posix uid/gid) with a timestamp and
 other unique values 
-> Structure : contains fields for timestamp, posix uid/gid and a node identifier 
-> use case : secure identification in environments where user or group information is relevent 

// eg 
00000000-0000-2000-8000-0026b9778b6a

// UUID v4 (random UUID)

-> it is commonly used for generating universally unique ids with a high degree of randomness 
-> Generation method : generated using random or pseudo-random values 
-> structure : 128 bit value where 122 bits are randomly generated 
-> use case : generating unique ids for database records, api keys, and distributed systems 
// eg 
f47ac10b-58cc-4372-a567-0e02b2c3d479

// differences 
v2 :
-> timestamp + uid/gid 
-> security and user-based id 
-> collision risk is very low 
-> user information is linked 

v4 :
-> random or pseudo random 
-> random unique identifiers 
-> collision risk is very low 
-> no user data included 

-> it is a 128 bit integer used for data identification in computer systems 
-> uuid uniqueness is not zero but it approaches it so closely that the risk 
of duplication is higly negligible 


// applications 

// database records 
-> frequent usuage as primary keys  or distinctve identifiers for database records 
-> they offer a means to distinctly identify and refer to individual data entries facilitating 
streamlined data management and retriveal process 

// distributed systems 
-> in distributed systems where mutliple nodes or services are involved uuid serve as globally 
unique identifier 
-> they help in coordinating and synchronizing data across different components, ensuring consistency 
and avoding conflicts 
*/

const {v4 : uuidv4 } = require('uuid');

// generate uuid
const uniqueId = uuidv4();
console.log('generated uuid:', uniqueId);

// output : generated uuid: 598601c6-6c2a-4fc4-bbd7-a4b02c33d37b 





