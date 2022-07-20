import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {instance} from "../../../axios/instance";

export function ReviewGrades(props) {
  const {dataUserSubjects } = props;
  const [studentsSubjects, setStudentsSubjects] = useState([]);
  const auth = useSelector((state) => state.login);
  const { user } = auth;
  const [semester, setSemester] = useState(1);
  const [studentsGrades, setStudentsGrades] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    setStudentsSubjects(
      dataUserSubjects.filter((item) => item.user._id === user._id)
    );

    const ids = dataUserSubjects
      .filter((item) => item.user._id === user._id)
      .reduce((ids, item) => {
        ids.push(item._id);
        return ids;
      }, []);
    const getSubjectGrades = async () => {
      const gradesSubject = await instance.post(`/subjectGrade/all`, {
        ids,
      });
      if (isSubscribed) {
        let prevSubjectID = "";
        let prevPartial = 0;
        let gradesSubjectData = [];

        for (var i = 0; i < gradesSubject.data.length; i++) {
          if (
            gradesSubject.data[i].userSubject !== prevSubjectID ||
            gradesSubject.data[i].partial !== prevPartial
          ) {
            gradesSubjectData.push(gradesSubject.data[i]);
            prevSubjectID = gradesSubject.data[i].userSubject;
            prevPartial = gradesSubject.data[i].partial;
          } else {
            if (prevPartial === gradesSubject.data[i].partial)
              gradesSubjectData[gradesSubjectData.length - 1].grade +=
                "," + gradesSubject.data[i].grade;
          }
        }

        setStudentsGrades(gradesSubjectData);
      }
    };
    getSubjectGrades();
    return () => (isSubscribed = false);
  }, [dataUserSubjects, user._id]);

  const getSubjectName = (_id) => {
    return dataUserSubjects.find((a) => a._id === _id)?.subject?.name;
  };
  // useEffect(()=>{
  //     setStudentsSubjects(array=>
  //         array.map((item, indexMap) => {
  //                 const grade = studentsGrades.find(a=>a.userSubject === item._id && Number(a.partial) === Number(semester))
  //                 return grade ?
  //                 {...item, gradeData: {_id:grade._id, grade:grade.grade??0, partial:grade.partial} }
  //                 :
  //                 {...item, gradeData: {_id:null, grade:0, partial:semester } }
  //         }))
  // }, [studentsGrades, semester])

  const changeSemester = (e) => {
    setSemester(e.target.value);
  };
  return (
    <div>
      <h2>Note curente</h2>
      {studentsSubjects.length === 0 && (
        <h3>Nu sunteți înrolat la nici o materie</h3>
      )}
      {studentsSubjects.length > 0 && (
        <div>
          <div className="user__form">
            <label
              htmlFor="newName"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Selectați Semestru
            </label>
            <select
              onChange={changeSemester}
              name="semester"
              id="semester"
              style={{
                color: "black",
                width: "100px",
                marginBottom: 10,
                marginLeft: 10,
                fontWeight: "bold",
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <table className="table__date">
            <thead>
              <tr>
                <th>Materia</th>
                <th>Note</th>
                <th>Media</th>
              </tr>
            </thead>
            <tbody>
              {studentsGrades
                .filter((a) => Number(a.partial) === Number(semester))
                .map((grade, i) => {
                  return (
                    <tr key={i}>
                      <td className="alignRight">
                        <span>{getSubjectName(grade.userSubject)}</span>
                      </td>
                      <td>{grade.grade}</td>
                      <td style={{textAlign:"center"}}>{
                          typeof grade.grade === 'number'
                          ? grade.grade
                          : grade.grade.split(',')
                            .map(v => Number(v))
                            .reduce((a, c, i, arr) => { a += c; if (i === arr.length - 1) { a /= arr.length } return a }, 0)
                            .toFixed(2)
                      }
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
