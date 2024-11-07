from dataclasses import dataclass
from itertools import groupby


@dataclass
class Student:
    id: int
    surname: str
    group_id: int
    score: float


@dataclass
class Group:
    id: int
    name: str


groups = [Group(0, "B15"), Group(1, "B16"), Group(2, "B17")]
students = [
    Student(0, "Ivanov", 1, 4.2),
    Student(1, "Petrov", 0, 3.1),
    Student(2, "Medvedev", 2, 4.8),
    Student(3, "Kozlov", 0, 5),
]


def query(groups: list[Group], students: list[Student]) -> list[tuple[str, float]]:
    # Группировка студентов по group_id (предварительно отсортировав список по group_id, так как этого требует функция groupby)
    group_students = groupby(
        sorted(students, key=lambda s: s.group_id), lambda s: s.group_id
    )

    # Вычисление суммы score студентов в каждой группе
    group_sum = [
        (g_id, sum([g_student.score for g_student in g_students]))
        for g_id, g_students in group_students
    ]

    # Сортировка групп по возрастанию суммы score
    sorted_group_sum = sorted(group_sum, key=lambda g: g[1])

    # Определение названии группы по group_id
    groups_dict = {group.id: group.name for group in groups}
    name_sum = [(groups_dict[g_id], g_sum) for g_id, g_sum in sorted_group_sum]

    return name_sum


if __name__ == "__main__":
    name_sum = query(groups, students)

    # Вывод результата
    for name, group_sum in name_sum:
        print(name, group_sum)
