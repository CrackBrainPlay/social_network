import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
    });
});

describe("after creation <span> with status should be displayed with correct status", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        // const instance = component.getInstance();
        const root = component.root;
        const span = root.findAllByType("span");
        expect(span.length).toBe(1);
    });
});

describe("after creation <input> with status should be displayed with correct status", () => {
    test("status from props should be in the state", () => {
        let component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        // const instance = component.getInstance();
        let root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("input should be displayed in editMode instead of span", () => {
        let component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        let root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("SUBSCRIBE TO BASIC");
    });

    test("callback should be called", () => {
        const mockCallBack = jest.fn()
        let component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateStatus={mockCallBack} />);
        let instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});

