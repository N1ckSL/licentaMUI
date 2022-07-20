import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Button, TextField } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import {instance} from "../../../axios/instance";

export function EvaluateStudents(props) {
  const { year, dataUserSubjects } = props;
  const [subjectAssigned, setSubjectAssigned] = useState(null);
  const [semester, setSemester] = useState(1);
  const [subjectNameAssigned, setSubjectNameAssigned] = useState("");
  const [studentsSubjects, setStudentsSubjects] = useState([]);
  const [studentsGrades, setStudentsGrades] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.login);
  const { user } = auth;
  useEffect(() => {
    const getSubjectAssigned = async () => {
      const subjectTeacher = await instance.get(
        `/userSubject/all/${year}/${user._id}`
      );
      if (subjectTeacher.data.length > 0) {
        setSubjectAssigned(subjectTeacher.data[0].subject._id);
        setSubjectNameAssigned(subjectTeacher.data[0].subject.name);
      } else {
        setSubjectAssigned(null);
        setSubjectNameAssigned("");
        setError("");
        setSuccess(false);
      }
    };
    getSubjectAssigned();
    setSemester(1);
  }, [year, user._id]);

  useEffect(() => {
    setStudentsSubjects(dataUserSubjects);
    const ids = dataUserSubjects.reduce((ids, item) => {
      //if(item.subject._id === subjectAssigned)
      ids.push(item._id);
      return ids;
    }, []);
    const getSubjectGrades = async () => {
      const gradesSubject = await instance.post(`/subjectGrade/all`, {
        ids,
      });
      setStudentsGrades(gradesSubject.data);
    };
    getSubjectGrades();
  }, [dataUserSubjects]);

  useEffect(() => {
    setStudentsSubjects((array) =>
      array.map((item, indexMap) => {
        return {
          ...item,
          gradeData: {
            _id: null,
            grade: 0,
            partial: semester,
          },
        };
      })
    );
  }, [semester]);

  useEffect(() => {
    setStudentsSubjects((array) =>
      array.map((item, indexMap) => {
        if (item.gradeData?._id) {
          return item;
        } else {
          const grade = studentsGrades.find(
            (a) =>
              a.userSubject === item._id &&
              Number(a.partial) === Number(semester)
          );
          return grade
            ? {
                ...item,
                gradeData: {
                  _id: grade._id,
                  grade: grade.grade ?? 0,
                  partial: grade.partial,
                },
              }
            : {
                ...item,
                gradeData: { _id: null, grade: 0, partial: semester },
              };
        }
      })
    );
  }, [studentsGrades, semester]);

  const updateGrade = async (ev) => {
    setSuccess(false);
    const { id, value } = ev.target;
    setStudentsSubjects((array) =>
      array.map((item, indexMap) =>
        item._id === id
          ? { ...item, gradeData: { ...item.gradeData, grade: value } }
          : item
      )
    );
  };

  const saveGrade = async (id, value, idGrade) => {
    try {
      setLoading(true);
      setSuccess(false);
      setError("");
      let resp = null;
      if (value <= 10 && value >= 1) {
      resp = await instance.post(`/subjectGrade/create`, {
        subjectStudent: id,
        partial: semester,
        grade: value,
      });
  
        if (resp.status === 200) {
          setSuccess(true);
          const ids = dataUserSubjects.reduce((ids, item) => {
            if (item.subject._id === subjectAssigned) ids.push(item._id);
            return ids;
          }, []);
          const getSubjectGrades = async () => {
            const gradesSubject = await instance.post(`/subjectGrade/all`, {
              ids,
            });
            setStudentsGrades(gradesSubject.data);
          };
          await getSubjectGrades();
        } else {
          setError(resp.data.msg);
        }
      } else {
        alert("Nota trebuie sa fie între 1 și 10!");
        setSuccess(false);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  return (
    <div>
      <h2>Evaluează Elevi</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {success && <h3 style={{ color: "green" }}>Nota a fost adăugată</h3>}
      {!subjectAssigned && <h3>Nu aveți nici o materia asociată</h3>}
      {subjectAssigned && (
        <div>
          <h3>{`Materia Predată: ${subjectNameAssigned.toUpperCase()}`}</h3>
          <div className="user__form">
            <label
              htmlFor="newName"
              style={{ color: "white", fontWeight: "bold", marginRight: 10 }}
            >
              Selectează Semestrul
            </label>
            <span className="select">
              <select
                onChange={(e) => setSemester(e.target.value)}
                name="semester"
                id="semester"
                style={{ color: "black", width: "100px", marginBottom: 15 }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </span>
          </div>
          <table className="table__date">
            <thead>
              <tr>
                <th>Nume Elev</th>
                <th>Notare Elev</th>
              </tr>
            </thead>
            <tbody>
              {studentsSubjects
                .filter(
                  (item) =>
                    item.subject._id === subjectAssigned && item.user.role === 0
                )
                .map((subject, i) => {
                  return (
                    <tr key={i}>
                      <td className="alignRight">
                        <span>{subject.user.name}</span>
                      </td>
                      <td>
                        {
                          subject.gradeData && (
                            <TextField
                              label="Selectati nota"
                              type="number"
                              id={subject._id}
                              value={subject.gradeData.grade}
                              onChange={(ev) => updateGrade(ev)}
                              disabled={loading}
                              size="small"
                              InputLabelProps={{
                                style: { fontSize: 18, color: "#3F51B5" },
                              }}
                              InputProps={{
                                style: {
                                  fontSize: 18,
                                  fontWeight: "bold",
                                  pattern: "^[0-9]{1,10}$",
                                },
                                readOnly: true,
                                inputProps: {
                                  min: 1,
                                  max: 10,
                                  pattern: "^^[0-9]{1,10}$",
                                  readOnly: false,
                                },
                              }}
                              style={{ width: 150, marginLeft: 10 }}
                              variant="filled"
                            />
                          )
                        }

                        <Button
                          variant="contained"
                          color="primary"
                          disabled={loading}
                          onClick={() =>
                            saveGrade(
                              subject._id,
                              subject.gradeData.grade,
                              subject.gradeData._id
                            )
                          }
                          style={{ marginLeft: 35, marginTop: 8 }}
                          startIcon={<CreateIcon />}
                        >
                          Notează
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
