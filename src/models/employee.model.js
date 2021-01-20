var dbConn = require("./../../config/db.config");
//Employee object create
var Employee = function (employee) {
  this.tipo_id = employee.tipo_id;
  this.id = employee.id;
  this.nombre = employee.nombre;
  this.apellido = employee.apellido;
  this.categoria = employee.categoria;
  this.edad = employee.edad;
  this.cargo = employee.cargo;
};
Employee.create = function (newEmp, result) {
  dbConn.query("INSERT INTO datos_emple set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Employee.findById = function (id, result) {
  dbConn.query(
    "Select * from datos_emple where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Employee.findAll = function (result) {
  dbConn.query("Select * from datos_emple", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};
Employee.update = function (id, employee, result) {
  dbConn.query(
    "UPDATE datos_emple SET tipo_id?,nombre=?,apellido=?,categoria=?,edad=?,cargo=? WHERE id = ?",
    [
      employee.tipo_id,
      employee.nombre,
      employee.apellido,
      employee.categoria,
      employee.edad,
      employee.cargo,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Employee.delete = function (id, result) {
  dbConn.query(
    "DELETE FROM datos_emple WHERE id = ?",
    [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = Employee;
