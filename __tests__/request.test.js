import 'isomorphic-fetch';

test('real fetch call', async () => {
    const res = await fetch("http://127.0.0.1:8000/json.php", {
        method: "GET",
        headers: {
            "Content-type":
                "application/x-www-form-urlencoded; charset=UTF-8",
        }
    });
    const result = await res.json();
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('value');
    expect(result[0]).toHaveProperty('date');
    expect(result[0]).toHaveProperty('type');
    expect(result[0]).toHaveProperty('coef');
    expect(result[0]).toHaveProperty('id_student');
    expect(result[0]).toHaveProperty('subject');
    expect(result[0]).toHaveProperty('comments');
});
