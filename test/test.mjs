import { assert } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import Ricecooker from '../src/Ricecooker.mjs';

describe('Ricecooker', () => {
  let ricecooker;

  beforeEach(() => {
    ricecooker = new Ricecooker();
  });

  afterEach(() => {
    // Cleanup if needed
  });

  it('should plug in the rice cooker', () => {
    ricecooker.plugIn();
    assert.isTrue(ricecooker.isPluggedIn);
  });

  it('should start cooking', () => {
    ricecooker.plugIn();
    ricecooker.startCooking();
    assert.isTrue(ricecooker.isCooking);
  });

  it('should interrupt cooking', () => {
    ricecooker.plugIn();
    ricecooker.startCooking();
    ricecooker.interruptCooking();
    assert.isFalse(ricecooker.isCooking);
  });

  it('should end cooking', () => {
    ricecooker.plugIn();
    ricecooker.startCooking();
    ricecooker.endCooking();
    assert.isFalse(ricecooker.isCooking);
    assert.isTrue(ricecooker.isKeepWarm);
  });

  it('should set the timer', () => {
    ricecooker.setTimer();
    assert.isAbove(ricecooker.timer, 0);
  });

  it('should start steam cooking', () => {
    ricecooker.steamCook();
    assert.isTrue(ricecooker.isSteamCooking);
  });

  it('should clean the inner bowl', () => {
    ricecooker.cleanInnerBowl();
    assert.isTrue(ricecooker.innerBowlClean);
  });

  it('should not start cooking without plugging in', () => {
    ricecooker.startCooking();
    assert.isFalse(ricecooker.isCooking);
  });

  it('should not interrupt cooking if not cooking', () => {
    ricecooker.interruptCooking();
    assert.isFalse(ricecooker.isCooking);
  });

  it('should not end cooking if not cooking', () => {
    ricecooker.endCooking();
    assert.isFalse(ricecooker.isCooking);
    assert.isFalse(ricecooker.isKeepWarm);
  });

  it('should not set timer while cooking', () => {
    ricecooker.plugIn();
    ricecooker.startCooking();
    ricecooker.setTimer();
    assert.equal(ricecooker.timer, 0);
  });

  it('should not start steam cooking while cooking', () => {
    ricecooker.plugIn();
    ricecooker.startCooking();
    ricecooker.steamCook();
    assert.isFalse(ricecooker.isSteamCooking);
  });

  it('should not clean inner bowl while cooking or in keep-warm mode', () => {
    ricecooker.startCooking();
    ricecooker.cleanInnerBowl();
    assert.isFalse(ricecooker.innerBowlClean);

    ricecooker.endCooking();
    ricecooker.cleanInnerBowl();
    assert.isFalse(ricecooker.innerBowlClean);
  });
});
