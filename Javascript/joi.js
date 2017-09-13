/**
 * Created by quangh on 9/13/2017.
 * https://github.com/hapijs/joi
 * Object schema description language and validator for JavaScript objects.
 */

const joi =require('joi');

const schema = joi.object().keys({
    username: joi.string().alphanum().min(3).max(30).required(),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    dob: joi.number().integer().min(1990).max(2017).default(2000),
    email: joi.string().email().forbidden(),
    gender: joi.string().valid(['male','female']).invalid(['malex']).allow(['malex']).required()
}).with('username', 'dob').required().unknown();

// unknown(): unknown key is allowed, unknown(false): unknown key is not allowed.
// valid([]): value must be one of []
// invalid([]): value must not be one of []
// allow([]): addition of valid value, override invalid() if it appears behind invalid()
// forbident(): the value must be undefined
// default(x): set the value = x if value = undefined

const res = joi.validate({username: 'quang', dob: undefined, uk: 1000, gender: 'malex', email: undefined}, schema);
console.log(res);