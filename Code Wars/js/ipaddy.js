// LEET CODE: https://leetcode.com/submissions/detail/317946129/
// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

/**
 * @param {string} address
 * @return {string}
 */
 
let defangIPaddr = function(address) {
   return address.replace(/\./g, "[.]")
};
