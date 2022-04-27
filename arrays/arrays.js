// https://medium.com/dailyjs/the-7-js-array-methods-you-will-need-in-2021-a9faa83b50e8

const hlp = require('../helper/helper').helper;

hlp.log('\n\n------------------');
hlp.log('Ejemplos de arrays');
hlp.log('------------------\n');

const cars = [
    { brand: 'Porsche', price: 100000, builtIn: 2018 },
    { brand: 'Audi', price: 80000, builtIn: 2019 },
    { brand: 'Toyota', price: 30000, builtIn: 2019 }
];
const cars1 = ['Porsche', 'Audi', 'BMW', 'Volkswagen'];
const cars2 = [
    { brand: 'Porsche', price: 100000 },
    { brand: 'Audi', price: 80000 },
    { brand: 'Toyota', price: 30000 },
    { brand: 'Volswagen', price: 40000 }
];
const cars3 = ['Porsche', 'Renault', 'Aston Martin', 'Volkswagen'];
const numbers = [13, 65, 29, 81, 47];

// console.log('Objectos de ejemplo:');
// console.log('cars:', cars);
// console.log('cars1:', cars1);
// console.log('cars2:', cars2);
// console.log('cars3:', cars3);

// 1. Array.map(). Crea un array nuevo con el resultado de la ejecución de la función contenida para cada elemento

hlp.logBlue(
    '1. Array.map()... Crea un array nuevo con el resultado de la ejecución de la función contenida para cada elemento'
);

const coolCars = cars1.map((car) => `${car} is a pretty cool car brand!`);

// Result:
// [
//	  "Porsche is a pretty cool car brand!",
//    "Audi is a pretty cool car brand!",
//    "BMW is a pretty cool car brand!",
//    "Volkswagen is a pretty cool car brand!"
// ];

hlp.logYellow(hlp.JSONStringify(coolCars));

// 2. Array.filter(). Devuelve los elementos que cumplen la evaluación definida dentro del filter
hlp.logBlue(
    '2. Array.filter()... Devuelve los elementos que cumplen la evaluación definida dentro del filter (de price >= 40000...)'
);

const expensiveCars = cars2.filter((car) => car.price >= 40000);

// Result - Expensive Cars
// [
//    {brand: "Porsche", price: 100000},
//    {brand: "Audi", price: 80000}
//    {brand: "Volkswagen", price: 40000}
// ];

hlp.logYellow(hlp.JSONStringify(expensiveCars));

// 3. Array.forEach(). Itera sobre el array y ejecuta la función para cada elemento
hlp.logBlue('3. forEach... Itera sobre el array y ejecuta la función para cada elemento');

cars2.forEach((car) => {
    hlp.logYellow(`The ${car.brand} will cost you ${car.price} before taxes`);
});

// 4. Array.find(). Devuelve el primer elemento que cumple la condición que le hemos pasado
hlp.logBlue(
    '4. find... Devuelve el primer elemento que cumple la condición que le hemos pasado (car.price >= 40000)'
);

const expensiveCar = cars2.find((car) => car.price >= 40000);

// Result - Expensive Car:
// {brand: "Porsche", price: 100000}

hlp.logYellow(`The first expensive car will cost you ${expensiveCar.price} before taxes`);

// 5. Array.every(). Chequea que todos los elementos del array cumplen la condición que le hemos pasado
hlp.logBlue(
    '5. every... Chequea que todos los elementos del array cumplen la condición que le hemos pasado'
);

const carsYoungerThanFiveYears = cars.every((car) => car.builtIn >= 2016);

// Result - Younger than 5 Years:
// true
hlp.logYellow('Todos los coches posteriores a 2016: "' + carsYoungerThanFiveYears + '"');

// 6. Array.some()
// Chequea si alguno de los elementos cumple la condición que le hemos pasado
hlp.logBlue(
    '6. some...  Chequea si alguno de los elementos del array cumple la condición que le hemos pasado'
);

const carsOlderThanFiveYears = cars.some((car) => car.builtIn < 2016);

// Result - Older than 5 Years:
// false
hlp.logYellow('Todos los coches de más de cinco años: "' + carsOlderThanFiveYears + '"');

// 7. Merge two arrays removing duplicates
hlp.logBlue('7. Uso del set para unir dos arrays sin elementos repetidos (set)...');

const carsTest = [...new Set([...cars1, ...cars3])];

// Result - ["Porsche","Audi","BMW","Volkswagen","Renault","Aston Martin"];
hlp.logYellow('Unión de arrays sin duplicados: "' + carsTest + '"');

// 9. Remove duplicates in array
const removeDuplicates = (arr) => [...new Set(arr)];

hlp.logBlue('8. Eliminar elementos repetidos en un array usando set');

// Result: [ 1, 2, 3, 4, 5, 6 ]

hlp.logYellow(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));

// 9. Chequear si un array está vacío
hlp.logBlue('9. Chequear si un array está vacío');

const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;
const isNotEmptyAux = (arr) => Array.isArray(arr) && Object.keys(arr).length > 0;

// Examples

hlp.logYellow(isNotEmpty([1, 2, 3])); // true
hlp.logYellow(isNotEmptyAux([])); // false
hlp.logYellow(isNotEmptyAux([1, 2, 3])); // true

// 10. Compare two arrays
hlp.logBlue('10. Comparar dos arrays');

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
// Or
const isEqual2 = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// Examples
hlp.logYellow('Debería ser igual:' + isEqual([1, 2, 3], [1, 2, 3])); // true
hlp.logYellow('No debería ser igual:' + isEqual([1, 2, 3], [1, '2', 3])); // false

hlp.logBlue('11. Convert an array of objects to a single object');

// 11. Convert an array of objects to a single object
const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});
// Or
const toObject2 = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));

hlp.logYellow('Ejemplo:');

// Example
console.log(
    toObject(
        [
            { id: '1', name: 'Alpha', gender: 'Male' },
            { id: '2', name: 'Bravo', gender: 'Male' },
            { id: '3', name: 'Charlie', gender: 'Female' }
        ],
        'id'
    )
);
/*
{
'1': { id: '1', name: 'Alpha', gender: 'Male' },
'2': { id: '2', name: 'Bravo', gender: 'Male' },
'3': { id: '3', name: 'Charlie', gender: 'Female' }
}
*/

hlp.logBlue('12. isArray... Check if an object is an array');

// 12. Check if an object is an array
const isArray = (obj) => Array.isArray(obj);

const test = [
    {
        onDemand: null,
        environment: 'INT',
        undeploymentDate: null,
        executionDate: 1641561420686,
        gcsp: null,
        id: 253675,
        status: 'DEPLOYED',
        nova: null,
        pendingActionTask: null,
        pendingResources: false,
        releaseName: 'PlanificadorMPV',
        etherNSDeploy: 'user.xe86245',
        monitoringUrl:
            'http://10.48.230.170:35420/novamonitoring/d/GJ-uzRSiz/product-dashboard-int?var-interval=5m&var-uuaa=kkka',
        subsystems: [
            {
                subsystemId: 5551,
                subsystemType: 'NOVA',
                pendingActionTask: null,
                subsystemTag: 'chktransfers',
                action: 'READY',
                ateneaUrl: null,
                id: 253677,
                instanceNumber: {
                    running: 0,
                    total: 0
                },
                services: [
                    {
                        serviceType: 'BATCH_SCHEDULER_NOVA',
                        releaseName: 'PlanificadorMPV',
                        groupId: 'com.bbva.kkka',
                        currentSchedule: null,
                        productName: 'KKKA',
                        numberOfInstances: 0,
                        action: 'READY',
                        hasAsyncBackToBack: false,
                        logicalConnectors: null,
                        id: 253678,
                        productId: 5548,
                        ramMb: null,
                        ateneaUrl: null,
                        instanceNumber: {
                            running: 0,
                            total: 0
                        },
                        releaseServiceJdkName: null,
                        version: '1.0.0',
                        releaseVersionId: 253651,
                        scheduleRequest: null,
                        folder: 'planificacion',
                        monitoredResourceId: null,
                        serveApiIds: [],
                        releaseServiceJvmVersion: null,
                        appliableJvmParameters: null,
                        deploymentPlanId: 253675,
                        pendingActionTask: null,
                        brokers: [],
                        releaseServiceId: 253653,
                        instances: [],
                        jvmParameters: '',
                        description: 'Servicio de Planificacion Batch',
                        filesystems: [],
                        memoryFactor: 75,
                        releaseId: 10715,
                        isEnabledAutodeployInPre: null,
                        endpointUrl:
                            'http://10.48.229.95:35420/com.bbva.kkka-planificacion-planificadormpv-1',
                        pendingScheduleTask: null,
                        artifactId: 'planificacion',
                        supportsMultiFilesystem: true,
                        serviceId: 253678,
                        dockerKey: '',
                        isEnabledAutodeployInPro: null,
                        serviceName: 'planificacion',
                        scheduleRequestAndDocumentRequired: false,
                        environment: 'INT',
                        isEnabledAutomanageInPre: null,
                        releaseVersionName: 'Prueba-releaseSlots',
                        hardwarePackCode: null,
                        isEnabledAutomanageInPro: null,
                        serviceFinalname: 'com.bbva.kkka-planificacion'
                    }
                ],
                subsystemName: 'testbatchschedule'
            }
        ],
        hasPendingAlerts: {
            basicAlertInfo: [],
            haveAlerts: false
        },
        releaseId: 10715,
        pendingDeploymentTypeChangeTask: null,
        numCpds: 1,
        action: 'READY',
        canBeManagedByUser: true,
        selectedDeploy: 'NOVA',
        hasPendingTasks: false,
        etherNSLogging: 'user.xe86245',
        pendingConfiguration: {
            taskType: null,
            pending: false,
            message: 'No se ha creado ninguna solicitud hasta el momento',
            taskId: null
        },
        multiCPD: false,
        ateneaUrl: null,
        parentEnvironment: null,
        creationDate: 1641561367323,
        firstPendingTask: null,
        productionCPD: 'TC',
        releaseVersionId: 253651,
        parentId: null,
        planningDocUrl: null,
        rejectionMessage: null,
        scheduleRequestAndDocumentRequired: false,
        deploymentType: 'ON_DEMAND',
        currentRevision: 253676,
        scheduleRequest: null,
        releaseVersionName: 'Prueba-releaseSlots',
        uuaa: 'KKKA',
        pendingConfigurationChange: null,
        selectedLogging: 'NOVA'
    },
    {
        onDemand: null,
        environment: 'INT',
        undeploymentDate: null,
        executionDate: 1641559722805,
        gcsp: null,
        id: 253645,
        status: 'DEPLOYED',
        nova: null,
        pendingActionTask: null,
        pendingResources: false,
        releaseName: 'PlanificadorFileTransfer',
        etherNSDeploy: 'user.xe86245',
        monitoringUrl:
            'http://10.48.230.170:35420/novamonitoring/d/GJ-uzRSiz/product-dashboard-int?var-interval=5m&var-uuaa=kkka',
        subsystems: [
            {
                subsystemId: 5551,
                subsystemType: 'NOVA',
                pendingActionTask: null,
                subsystemTag: 'chktransfers',
                action: 'READY',
                ateneaUrl: null,
                id: 253647,
                instanceNumber: {
                    running: 0,
                    total: 0
                },
                services: [
                    {
                        serviceType: 'BATCH_SCHEDULER_NOVA',
                        releaseName: 'PlanificadorFileTransfer',
                        groupId: 'com.bbva.kkka',
                        currentSchedule: null,
                        productName: 'KKKA',
                        numberOfInstances: 0,
                        action: 'READY',
                        hasAsyncBackToBack: false,
                        logicalConnectors: null,
                        id: 253648,
                        productId: 5548,
                        ramMb: null,
                        ateneaUrl: null,
                        instanceNumber: {
                            running: 0,
                            total: 0
                        },
                        releaseServiceJdkName: null,
                        version: '1.0.0',
                        releaseVersionId: 253640,
                        scheduleRequest: null,
                        folder: 'planificacion',
                        monitoredResourceId: null,
                        serveApiIds: [],
                        releaseServiceJvmVersion: null,
                        appliableJvmParameters: null,
                        deploymentPlanId: 253645,
                        pendingActionTask: null,
                        brokers: [],
                        releaseServiceId: 253642,
                        instances: [],
                        jvmParameters: '',
                        description: 'Servicio de Planificacion Batch',
                        filesystems: [],
                        memoryFactor: 75,
                        releaseId: 42874,
                        isEnabledAutodeployInPre: null,
                        endpointUrl:
                            'http://10.48.229.95:35420/com.bbva.kkka-planificacion-planificadorfiletransfer-1',
                        pendingScheduleTask: null,
                        artifactId: 'planificacion',
                        supportsMultiFilesystem: true,
                        serviceId: 253648,
                        dockerKey: '',
                        isEnabledAutodeployInPro: null,
                        serviceName: 'planificacion',
                        scheduleRequestAndDocumentRequired: false,
                        environment: 'INT',
                        isEnabledAutomanageInPre: null,
                        releaseVersionName: 'Prueba-relaseSlots',
                        hardwarePackCode: null,
                        isEnabledAutomanageInPro: null,
                        serviceFinalname: 'com.bbva.kkka-planificacion'
                    }
                ],
                subsystemName: 'testbatchschedule'
            }
        ],
        hasPendingAlerts: {
            basicAlertInfo: [],
            haveAlerts: false
        },
        releaseId: 42874,
        pendingDeploymentTypeChangeTask: null,
        numCpds: 1,
        action: 'READY',
        canBeManagedByUser: true,
        selectedDeploy: 'NOVA',
        hasPendingTasks: false,
        etherNSLogging: 'user.xe86245',
        pendingConfiguration: {
            taskType: null,
            pending: false,
            message: 'No se ha creado ninguna solicitud hasta el momento',
            taskId: null
        },
        multiCPD: false,
        ateneaUrl: null,
        parentEnvironment: null,
        creationDate: 1641557918979,
        firstPendingTask: null,
        productionCPD: null,
        releaseVersionId: 253640,
        parentId: null,
        planningDocUrl: null,
        rejectionMessage: null,
        scheduleRequestAndDocumentRequired: false,
        deploymentType: 'ON_DEMAND',
        currentRevision: 253646,
        scheduleRequest: null,
        releaseVersionName: 'Prueba-relaseSlots',
        uuaa: 'KKKA',
        pendingConfigurationChange: null,
        selectedLogging: 'NOVA'
    }
];

hlp.logYellow('Debería ser array: ' + isArray(test));

// 13. map. Get only a property of an array of objects
hlp.logBlue('13. map... Get only a property of an array of objects');

const reducido = test.map((datos) => {
    return datos.id;
});

hlp.logYellow(reducido);

// 14. length = ... Reduce an array length
hlp.logBlue('14. length. Reducir el tamaño de un array usando la asignación de length');

var array = [1, 2, 3, 4, 5, 6];
hlp.logYellow('Array inicial debe tener 6: ' + array.length); // 6

array.length = 3;
hlp.logYellow('Reducimos con array.length = 3, debe tener 3: ' + array.length); // 6

array.length = 0;
hlp.logYellow('For **emptying array** use array.length = 0: ' + array.length);

// 15. splice... Reduce an array length
hlp.logBlue('15. length. Reducir el tamaño de un array usando la asignación de length');

const myArray = ['a', 'b', 'c', 'd'];
myArray.splice(0, 2); // [('a', 'b')];

hlp.logYellow('Inicial ["a", "b", "c", "d"], con splice(0, 2): ', myArray);

// 16. Concat arrays
hlp.logBlue('16. concat... Concat arrays. For short arrays');

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
const concatenatedArrays = array1.concat(array2); // [1,2,3,4,5,6];

hlp.logYellow('Iniciales [1, 2, 3] y [4, 5, 6]. Con array1.concat(array2): ', concatenatedArrays);
