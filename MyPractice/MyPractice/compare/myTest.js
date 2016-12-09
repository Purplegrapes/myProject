QUnit.test('compare()', function (assert) {
    assert.ok(compare(object1, object1A)==true, true);
    assert.ok(compare(object1, object1B) == false, 'false');
})
QUnit.test('compare()', function (assert) {
    assert.ok(compare(object2, object2A) == true, true);
    assert.ok(compare(object2, object2B) == false, 'false');
})
QUnit.test('compare()', function (assert) {
    assert.ok(compare(array, arrayA) == true, true);
    assert.ok(compare(array, arrayB) == false, 'false');
})
QUnit.test('compare()', function (assert) {
    assert.ok(compare(object3, object3A) == true, true);
    assert.ok(compare(object3, object3B) == false, 'false');
})