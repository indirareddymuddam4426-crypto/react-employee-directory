import { useState, useEffect } from 'react';

const SERVER_DATA = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz", role: "Frontend Engineer" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", role: "Backend Developer" },
    { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net", role: "UI/UX Designer" },
    { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org", role: "Product Manager" },
    { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca", role: "DevOps Engineer" },
    { id: 6, name: "Mrs. Dennis Schulist", email: "Karley_Dach@jasper.info", role: "QA Automation" },
    { id: 7, name: "Kurtis Weissnat", email: "Telly.Hoeger@billy.biz", role: "Full-Stack Developer" },
    { id: 8, name: "Nicholas Runolfsdottir V", email: "Sherwood@rosamond.me", role: "Data Analyst" },
    { id: 9, name: "Glenna Reichert", email: "Chaim_McDermott@dana.io", role: "Cloud Architect" },
    { id: 10, name: "Clementina DuBuque", email: "Rey.Padberg@karina.biz", role: "Security Engineer" }
];

export default function App() {
    // 1. MEMORY BOXES
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState("");

    // 2. DATA SOURCE
    useEffect(() => {
        setUsers(SERVER_DATA);
    }, []);

    // 3. YOUR LOGIC PIPELINE (Multi-field filter)
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchText.toLowerCase()) || 
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );

    // 4. POLISHED DASHBOARD UI
    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "30px 20px", fontFamily: "system-ui, sans-serif", color: "#1e293b" }}>
            <h1 style={{ marginBottom: "5px", color: "#0f172a" }}>Company Employee Directory</h1>
            <p style={{ color: "#64748b", marginTop: "0", marginBottom: "20px" }}>Search and filter active engineering staff</p>

            {/* Search Controls */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <input 
                    type="text" 
                    placeholder="Search by name or email..." 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ flex: 1, padding: "10px 14px", fontSize: "16px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                />
                <button 
                    onClick={() => setSearchText("")}
                    style={{ padding: "10px 20px", fontSize: "16px", borderRadius: "8px", border: "none", backgroundColor: "#2563eb", color: "white", cursor: "pointer", fontWeight: "600" }}
                >
                    Clear
                </button>
            </div>

            {/* Your Dynamic Counter */}
            <p style={{ fontSize: "14px", color: "#475569", fontWeight: "500" }}>
                Showing {filteredUsers.length} of {users.length} employees
            </p>

            {/* Your Empty State Check */}
            {filteredUsers.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#f8fafc", borderRadius: "8px", color: "#64748b" }}>
                    No matching employees found.
                </div>
            )}

            {/* Responsive Card Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "15px", marginTop: "15px" }}>
                {filteredUsers.map(user => (
                    <div key={user.id} style={{ border: "1px solid #e2e8f0", borderRadius: "10px", padding: "16px", backgroundColor: "#ffffff", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                        <span style={{ fontSize: "12px", backgroundColor: "#eff6ff", color: "#2563eb", padding: "3px 8px", borderRadius: "12px", fontWeight: "600" }}>
                            {user.role}
                        </span>
                        <h3 style={{ margin: "10px 0 5px 0", fontSize: "18px" }}>{user.name}</h3>
                        <p style={{ margin: "0", fontSize: "14px", color: "#64748b" }}>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
