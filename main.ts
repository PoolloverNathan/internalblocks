/**
 * Adds blocks to access otherwise unavailable JavaScript methods that are useful.
 */
//% color=#38311b icon="\uf7ea"
namespace internalBlocks {
    /**
     * Runs some code in the background without making other code wait.
     */
    //% block="run $code in the background"
    export function inBackground(code: () => void) {
        control.runInParallel(code);
    }
}