from dataclasses import dataclass


@dataclass
class Student:
    id: int
    surname: str


@dataclass
class Group:
    id: int
    name: str


@dataclass
class GroupStudent:
    student_id: int
    group_id: int


groups = [Group(0, "B15"), Group(1, "B16"), Group(2, "B17")]
students = [
    Student(0, "Ivanov"),
    Student(1, "Petrov"),
    Student(2, "Medvedev"),
    Student(3, "Kozlov"),
]
group_students = [
    GroupStudent(3, 1),
    GroupStudent(0, 0),
    GroupStudent(1, 1),
    GroupStudent(2, 2),
    GroupStudent(0, 2),
    GroupStudent(1, 0),
    GroupStudent(3, 0),
    GroupStudent(3, 2),
]


def query(
    groups: list[Group],
    students: list[Student],
    group_students: list[GroupStudent],
    name: str,
) -> list[tuple[str, list[str]]]:
    # Фильтрация групп содержащих заданное слово в названии
    filtered_groups = [g for g in groups if name in g.name]

    # Получение набора GroupStudent для каждой группы
    groups_gs = [
        (g, [gs for gs in group_students if gs.group_id == g.id])
        for g in filtered_groups
    ]

    # Фильтрация пустных групп
    groups_gs = [g for g in groups_gs if len(g[1]) > 0]

    # Определение названии группы и фамилии студента по student_id
    students_dict = {student.id: student.surname for student in students}
    groups_surnames = [
        (g[0].name, [students_dict[gs.student_id] for gs in g[1]])
        for g in groups_gs
    ]

    return groups_surnames


if __name__ == "__main__":
    groups_surnames = query(groups, students, group_students, "B")

    # Вывод результата
    for name, surnames in groups_surnames:
        print(name)
        for surname in surnames:
            print(surname)
        print()
