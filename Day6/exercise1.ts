interface Student {
    name: string;
    email: string;
    age: Date;
    score: number;
  }
  
  interface Result {
    score: {
      highest: number;
      lowest: number;
      average: number;
    };
    age: {
      highest: number;
      lowest: number;
      average: number;
    };
  }
  
  function calculateStudentData(students: Student[]): Result {
    if (students.length === 0) {
      throw new Error("Student array cannot be empty");
    }
  
    const ages = students.map(student => student.age.getFullYear());
    const scores = students.map(student => student.score);
  
    return {
      score: {
        highest: Math.max(...scores),
        lowest: Math.min(...scores),
        average: scores.reduce((a, b) => a + b, 0) / scores.length,
      },
      age: {
        highest: Math.max(...ages),
        lowest: Math.min(...ages),
        average: Math.floor(ages.reduce((a, b) => a + b, 0) / ages.length),
      },
    };
  }
  
  // Contoh penggunaan
  const students: Student[] = [
    { name: "Alice", email: "alice@example.com", age: new Date(2000, 5, 15), score: 85 },
    { name: "Bob", email: "bob@example.com", age: new Date(1998, 2, 10), score: 90 },
    { name: "Charlie", email: "charlie@example.com", age: new Date(2002, 8, 25), score: 75 },
  ];
  
  console.log(calculateStudentData(students));