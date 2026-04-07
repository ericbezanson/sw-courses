import { Course } from './courses.types'
import Image from 'next/image'
import Link from 'next/link'

export default function CourseBig({ course }: { course: Course }) {

    return (
        <>
            <Link
                key={course.courseId}
                href={`/course/${course.courseId}`}
                className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
                <div className="w-4/5 h-[300px] border-2 border-white rounded-xl mx-auto mb-8 flex flex-row justify-left hover:bg-zinc-800 transition-colors duration-200 cursor-pointer">
                    <Image
                        className="object-cover rounded-lg w-[400px] h-[225px] mt-10 ml-10 shrink-0"
                        src={course.courseImage}
                        width={400}
                        height={225}
                        alt={`${course.courseName} thumbnail`}
                    />
                    <div className="w-full overflow-hidden">
                        <h1 className="w-full mt-8 text-4xl font-bold text-center text-transform: capitalize">{course.courseName} - {course.dicipline} Program</h1>
                        <ul className="w-full mt-8 px-24 text-lg list-outside grid grid-cols-2 gap-x-12 gap-y-4 leading-relaxed text-center text-zinc-200">
                            {course.curriculum.map((lesson, i) => (
                                <li className="text-left" key={lesson.title}>Lesson #{i + 1}: {lesson.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Link>
        </>
    )
}