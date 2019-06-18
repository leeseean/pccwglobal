/**
 * author: Zhengchen Qiu
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (arrayOfProperties, arrayOfObjects) => {
    return arrayOfObjects.map(item => {
        const keys = Object.keys(item);
        keys.forEach(key => {
            if (arrayOfProperties.includes(key)) {
                delete item[key];
            }
        });
        return item;
    });
};
exports.excludeByProperty = (property, arrayOfObjects) => {
    return arrayOfObjects.filter(item => {
        const keys = Object.keys(item);
        return !keys.includes(property);
    });
};
exports.sumDeep = (arrayOfObjects) => {
    return arrayOfObjects.map(item => {
        const sum = item.objects.reduce((total, obj) => {
            return total + obj.val;
        }, 0);
        return { objects: sum };
    });
};
exports.applyStatusColor = (objColors, arrStatus) => {
    const arrResult = [];
    const arrColors = Object.keys(objColors);
    arrStatus.forEach(item => {
        arrColors.forEach(color => {
            if (objColors[color].includes(item.status)) {
                item.color = color;
                arrResult.push(item);
            }
        })
    });
    return arrResult;
};
exports.createGreeting = (fun, greetStrs) => name => fun(greetStrs, name);
exports.setDefaults = (objDefault) => obj => Object.assign({ ...objDefault }, obj);
exports.fetchUserByNameAndUsersCompany = async (name, services) => {
    const status = await services.fetchStatus();
    const users = await services.fetchUsers();
    const user = users.find(v => v.name === name);
    const id = user.companyId;
    const company = await services.fetchCompanyById(id);
    return {
        company,
        status,
        user
    };
};
