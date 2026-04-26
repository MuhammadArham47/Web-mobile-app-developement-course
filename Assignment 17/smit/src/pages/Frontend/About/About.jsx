import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const users = [
  { name: "John Doe", age: 25, address: "New York", phone: "123-456-7890", email: "lH8GZ@example.com", isActive: true },
  { name: "Jane Doe", age: 30, address: "San Francisco", phone: "987-654-3210", email: "o5t0T@example.com", isActive: false },
  { name: "Bob Smith", age: 35, address: "London", phone: "555-555-5555", email: "t5Ejx@example.com", isActive: true },
  { name: "Alice Johnson", age: 40, address: "Paris", phone: "111-222-3333", email: "s9K0X@example.com", isActive: false },
  { name: "Charlie Brown", age: 45, address: "Tokyo", phone: "999-888-7777", email: "7e9QW@example.com", isActive: true },
  { name: "Emily Davis", age: 50, address: "Sydney", phone: "666-777-8888", email: "hDd0f@example.com", isActive: false },
  { name: "Michael Wilson", age: 55, address: "Berlin", phone: "444-333-2222", email: "9V2Q3@example.com", isActive: true },
  { name: "Olivia Taylor", age: 60, address: "Moscow", phone: "222-333-4444", email: "9Q5d8@example.com", isActive: false },
  { name: "William Anderson", age: 65, address: "Rio de Janeiro", phone: "777-666-5555", email: "5Q5d8@example.com", isActive: true },
  { name: "Sophia Martinez", age: 70, address: "Beijing", phone: "888-777-6666", email: "5Q5d8@example.com", isActive: false },
];

function About() {
  return (
    <div className="container my-5">
      <Title level={1}>About Page</Title>
      <Title level={3}>User List Using Map Method 📃</Title>
      <div className="overflow-auto">
      <table className="table table-striped table-hover table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default About;
