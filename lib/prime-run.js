const exportVar = (name, value) => {
  process.env[name] = value;
};

module.exports = function () {
  exportVar("__NV_PRIME_RENDER_OFFLOAD", "1")
  exportVar("__VK_LAYER_NV_optimus", "NVIDIA_only")
  exportVar("__GLX_VENDOR_LIBRARY_NAME", "nvidia")
  exportVar("VK_ICD_FILENAMES", "/usr/share/vulkan/icd.d/nvidia_icd.json")
}