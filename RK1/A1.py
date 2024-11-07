from dataclasses import dataclass
from itertools import groupby


@dataclass
class Student:
    id: int
    surname: str
    group_id: int


@dataclass
class Group:
    id: int
    name: str


groups = [Group(0, "B15"), Group(1, "B16"), Group(2, "B17")]
students = [
    Student(0, "Ivanov", 1),
    Student(1, "Petrov", 0),
    Student(2, "Medvedev", 2),
    Student(3, "Kozlov", 0),
]


def query(groups: list[Group], students: list[Student]) -> list[tuple[str, list[str]]]:
    # Сортировка студентов по group_id
    sorted_students = sorted(students, key=lambda s: s.group_id)

    # Группировка студентов по group_id
    group_students = groupby(sorted_students, lambda s: s.group_id)

    # Определение названии группы по group_id и фамилии студента
    groups_dict = {group.id: group.name for group in groups}
    name_students = [
        (groups_dict[g_id], [gs.surname for gs in g_students])
        for g_id, g_students in group_students
    ]

    return name_students


if __name__ == "__main__":
    name_students = query(groups, students)

    # Вывод результата
    for name, surnames in name_students:
        print(name)
        for surname in surnames:
            print(surname)
        print()
