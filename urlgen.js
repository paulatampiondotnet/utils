const params = require('./params.json');
const qs = new URLSearchParams();

const { branch } = params;

const RAND = Math.random() * 10000;
params.email = `${params.email}+${(RAND * RAND).toFixed(0)}@ampion.net`

Object.keys(params).map((key) => {
    params[key] && qs.append(key, params[key]);
});

qs.delete('branch');

const url = `https://enrollment-react-${branch || 'master'}-deploy-nsuulkqn2a-uc.a.run.app/?${qs.toString()}`

console.log(url);
