import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
    test("test only" , () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("test aditional class" , () => {
        expect(classNames("someClass" , {} , ["class1" , "class2"])).toBe("someClass class1 class2");
    });

    test("test mode class" , () => {
        expect(classNames("someClass" , {"classMode": false} , [])).toBe("someClass");
    });
 });