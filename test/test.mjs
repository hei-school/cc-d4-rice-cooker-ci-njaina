import { assert } from 'chai';
import Ricecooker from '../src/Ricecooker.mjs';

describe('Ricecooker', () => {
  let ricecooker;

  beforeEach(() => {
    ricecooker = new Ricecooker();
  });

  afterEach(() => {
    // Cleanup if needed
  });

  it('should start cooking', () => {
    ricecooker.startCooking();
    assert.isTrue(ricecooker.isCooking);
  });

  it('should end cooking', () => {
    ricecooker.isCooking = true;
    ricecooker.endCooking();
    assert.isFalse(ricecooker.isCooking);
    assert.isTrue(ricecooker.isKeepWarm);
  });

  // Add other tests for the remaining methods

  it('should clean inner bowl', () => {
    ricecooker.isCooking = false;
    ricecooker.isKeepWarm = false;
    ricecooker.cleanInnerBowl();
    assert.isTrue(ricecooker.innerBowlClean);
  });
});
